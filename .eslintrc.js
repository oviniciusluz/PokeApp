// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/display-name": "off",
  },
  overrides: [
    {
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      rules: {},
    },
  ],
  ignorePatterns: ["node_modules/", "dist/", "build/"],
};

