module.exports = {
  "env": {
    "node": true,
    "astro/astro": true,
    "browser": true
  },
  "extends": ["@antfu", "turbo", "plugin:astro/recommended"],
  "plugins": ["import-newlines", "astro", "jsx-a11y"],
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
      },
    },
    {
      "files": ["*.js", "*.cjs", "*.mjs", "*.ts", "*.tsx", "*.astro"],
      "rules": {
        "import-newlines/enforce": [ "error", { "items": 2, "max-len": 100, "semi": false }],
        "require-await": "error",
        "sort-imports": [
          "error",
          {
            "ignoreCase": false,
            "ignoreDeclarationSort": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
            "allowSeparatedGroups": true
          }
        ],
        "lines-between-class-members": ["error", "always", {"exceptAfterSingleLine": true}],
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": ["import", "export"], "next": "*"},
          { "blankLine": "any", "prev": "import", "next": "import"},
          { "blankLine": "any", "prev": "export", "next": "export"},
          { "blankLine": "always", "prev": "*", "next": ["const", "let", "var"]},
          { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
          { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
          { "blankLine": "always", "prev": "*", "next": ["return", "expression"]},
          { "blankLine": "always", "prev": "block-like", "next": "*"}

        ],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { "accessibility": "explicit" }
        ]
      }
    }
  ]
}