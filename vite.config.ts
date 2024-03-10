import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import envConfig from "./env.json"

type Env = keyof typeof envConfig

const areEnvConfigsIdentical = Object.keys(envConfig).every((env) => {
  return (
    JSON.stringify(Object.keys(envConfig[env as Env].features)) ===
    JSON.stringify(Object.keys(envConfig.development.features))
  )
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (!areEnvConfigsIdentical) {
    console.error(
      "\x1b[31m",
      "Environment configs have properties that don't match."
    )
    process.exit(1)
  }

  return {
    // Hosted on Github Pages under url https://lazarkulasevic.github.io/vite-feature-flags/
    base: "/vite-feature-flags/",

    plugins: [React()],

    define: {
      __FEATURES__: JSON.stringify(envConfig[mode as Env].features),
    },
  }
})
