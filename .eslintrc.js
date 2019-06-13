module.exports = {
  "env": {
    "browser": false,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline",
    }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
  }
};
