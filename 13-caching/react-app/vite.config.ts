// <reference types="vitest" />
import { defineConfig } from "vite";
import "vitest/config"; // this line actually pulls in types
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts", // Optional setup file
  },
});
