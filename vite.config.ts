import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import envConfig from "./env.json"

const areEnvConfigsIdentical = Object.keys(envConfig).every((key) => {
  return (
    JSON.stringify(
      Object.keys(envConfig[key as keyof typeof envConfig].features)
    ) === JSON.stringify(Object.keys(envConfig.development.features))
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
    plugins: [React()],
    define: {
      __FEATURES__: JSON.stringify(
        envConfig[mode as keyof typeof envConfig].features
      ),
    },
  }
})
