import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      VITE_API_URL: "http://backend-service:5000/api",
      SECRET_KEY: "QWERTY123456",
    }),
  ],
});

//VITE_API_URL: "https://money-flow.it:2000/api",

//http://51.75.30.166:5001/api
