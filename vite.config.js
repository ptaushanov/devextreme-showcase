import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: '/devextreme-showcase/',
    css: {
      postcss: {
        plugins: [
          postcssNesting
        ],
      },
    },
    esbuild: {
      treeShaking: false
    },
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    preview: {
      host: true,
      port: 4500,
      open: true,
    },
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      rollupOptions: {
        treeshake: false,
      },
      outDir: './build'
    }
  })
}