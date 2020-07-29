module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        browser: true,
        commonjs: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "prettier"],
    plugins: ["prettier", "react", "react-hooks", "simple-import-sort"],
    rules: {
        "array-bracket-newline": ["error", "consistent"],
        "array-callback-return": "error",
        "array-element-newline": ["error", "consistent"],
        "brace-style": ["error", "1tbs"],
        "eol-last": ["error", "always"],
        "lines-between-class-members": ["error", "always"],
        "no-await-in-loop": "error",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-shadow": ["error", { hoist: "all" }],
        "no-trailing-spaces": "error",
        "no-use-before-define": "error",
        "prettier/prettier": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "sort-imports": "off", // Required by simple-import-sort
        "import/order": "off", // Required by simple-import-sort
        "simple-import-sort/sort": "error",
        curly: ["error", "all"],
        eqeqeq: ["error", "always"],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
};
