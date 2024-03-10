import { defineConfig } from "vite"
import React from "@vitejs/plugin-react-swc"
import ViteYaml from "@modyfi/vite-plugin-yaml"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React(), ViteYaml()],
})
