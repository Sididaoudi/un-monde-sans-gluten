import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    // Utilise le sous-dossier uniquement lors de la compilation (npm run deploy)
    // Reste à la racine "/" en local (npm run dev)
    base: command === "build" ? "/un-monde-sans-gluten/" : "/",
    plugins: [react(), tailwindcss()],
  };
});
