module.exports = {
  extends: 'zyehex',
  overrides: [
    {
      files: ['**/*.test.[tj]s'],
      env: {
        jest: true
      }
    }
  ]
};
