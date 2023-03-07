module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@constants': './src/constants',
          '@config': './src/config',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@navigations': './src/navigations',
          '@images': './src/assets/images',
          '@fonts': './src/assets/fonts',
          '@store': './src/store',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@realm': './src/realm',
          '@providers': './src/providers',
          '@localization': './src/localization',
        },
      },
    ],
  ],
};
