import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import envConfig from "./env.json"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [React()],
  define: {
    __FEATURES__: JSON.stringify(
      envConfig[mode as keyof typeof envConfig].features
    ),
  },
}))
