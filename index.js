module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "airbnb-base", "plugin:vue/essential"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "plugins": ["vue"],
    "ignorePatterns": [
        "config.js",
        "plugins/*.js",
        "test/*.js",
        "tests/unit/*.js"
    ],
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "no-underscore-dangle": 0,
        "operator-linebreak": 0,
        "import/extensions": ["error", "never", { "js": "always" }],
        "max-len": 0,
        "vue/multi-word-component-names": [
            "error",
            {
                "ignores": [
                    "Accordion",
                    "Chapters",
                    "Hero",
                    "Podcast",
                    "Prices",
                    "Comparison",
                    "Gutenberg",
                    "Member",
                    "Newsletter",
                    "Spacer",
                    "Stats",
                    "Typography",
                    "Video",
                    "default",
                    "error",
                    "index"
                ]
            }
        ],
        "import/no-unresolved": [2, { "ignore": ["\\.js$"] }],
        "radix": ["error", "as-needed"],
        "implicit-arrow-linebreak": 0,
        "function-paren-newline": 0,
        "prefer-destructuring": 0,
        "indent": 0
    },
    "settings": {
        "import/core-modules": ["vuex", "consola", "dotenv"],
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".vue"]
            }
        }
    }
}

