module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          screens: './app/screens',
          components: './app/components',
          navigations: './app/navigations',
          utils: './app/utils',
          assets: './app/assets',
          styles: './app/styles',
          services: './app/services',
          helpers: './app/helpers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
