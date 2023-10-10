module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  globals: {
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
