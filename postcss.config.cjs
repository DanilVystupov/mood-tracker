module.exports = {
  plugins: {
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
};
