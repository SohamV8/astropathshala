export default {
    env: {
      browser: true,
      node: true, // Enables Node.js globals like `module` and `require` (if needed)
      es2021: true, // Modern ES features
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
      ecmaVersion: 12, // Allows ES6+ syntax
      sourceType: "module", // Specifies ES Modules
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
    rules: {
      "no-undef": "off", // Suppress errors for `module` and `require` if still present
    },
  };
  