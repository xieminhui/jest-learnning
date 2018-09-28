module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module"
  },
  "globals": {
      __dirname: false,
      process: false
  },
  "rules": {
      "indent": 0,
      "linebreak-style": [
          "error",
          "windows"
      ],
      "quotes": 0,
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars": [
          'warn'
      ],
      "no-console": 0,
      "no-undef": [
          'warn'
      ]
  }
};