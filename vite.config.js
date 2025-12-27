import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // This ensures the app runs at the root of the domain
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()]
//   // base: "/Amazon-Clone-Frontend-and-Backend--2025/", // THIS IS IMPORTANT
// });
