/** @type {import('postcss-load-config').Config} */
import advancedVariables from 'postcss-advanced-variables'
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
const config = {
    plugins: [advancedVariables,autoprefixer,postcssImport]
  }

export default config
