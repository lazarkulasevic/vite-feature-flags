import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import envConfig from "./env.json"

type Env = keyof typeof envConfig

const featuresListProd = Object.keys(envConfig.production.features)
const allEnvsMatchProdFeatures = Object.keys(envConfig).every((env) => {
  const currentFeaturesList = Object.keys(envConfig[env as Env].features)
  return (
    JSON.stringify(currentFeaturesList) === JSON.stringify(featuresListProd)
  )
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (!allEnvsMatchProdFeatures) {
    console.error("\x1b[31m", "Features don't match across all environments.")
    process.exit(1)
  }

  return {
    plugins: [React()],

    // Hosted on Github Pages under url https://lazarkulasevic.github.io/vite-feature-flags/
    base: mode === "production" ? "/vite-feature-flags/" : "/",

    define: {
      __FEATURES__: JSON.stringify(envConfig[mode as Env].features),
    },
  }
})
