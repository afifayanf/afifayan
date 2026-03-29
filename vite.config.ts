import { defineConfig } from "vite"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
plugins: [
react(),
tailwindcss(),
],

resolve: {
alias: {
"@": path.resolve(__dirname, "./src"),
},
},

server: {
host: true,
port: 5173,
strictPort: true,
allowedHosts: [
"afifayan.fun",
"[www.afifayan.fun](http://www.afifayan.fun)",
"localhost",
"127.0.0.1"
]
},

preview: {
host: true,
port: 5173
},

assetsInclude: ["**/*.svg", "**/*.csv"]
})
