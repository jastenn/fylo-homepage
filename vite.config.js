import postcssAutoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssMixins from 'postcss-mixins'
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssSimpleVars,
        postcssNested,
        postcssMixins,
        postcssAutoprefixer,
      ]
    }
  }
})