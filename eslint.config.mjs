import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "eqeqeq": 2,
      "curly": 2,
    }
  },
  pluginJs.configs.recommended
];