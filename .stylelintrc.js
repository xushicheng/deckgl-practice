module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-config-prettier-scss',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  rules: {
    'no-descending-specificity': null,
  },
};
