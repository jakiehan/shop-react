module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:react/jsx-runtime",
        "airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    "parserOptions": {
        project: "./tsconfig.eslint.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "import/prefer-default-export": "off",
        "jsx-a11y/click-events-have-key-events": ["off"],
        "jsx-a11y/no-noninteractive-element-interactions": ["off"],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "no-console": "off",
        "no-param-reassign": ["error", { "props": false }],
        "react/require-default-props": "off"
    }
}
