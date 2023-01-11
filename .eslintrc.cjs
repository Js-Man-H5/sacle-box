/*
 * @Author: jack.hai
 * @Date: 2023-01-05 10:29:31
 * @LastEditTime: 2023-01-05 15:11:09
 * @Description:
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
