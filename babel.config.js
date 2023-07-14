module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@atoms': './src/components/ui/atoms',
          '@molecules': './src/components/ui/molecules',
          '@objects': './src/components/ui/objects',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@ui': './src/components/ui/index.ts'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
