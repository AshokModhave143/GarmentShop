const path = require('path')

module.exports = async ({ config }) => {
  return {
    ...config,
    resolve: {
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        '@storybook/react-native': '@storybook/react',
      },
      modules: [...config.resolve.modules, path.resolve(__dirname, '../', 'node_modules')],
      extensions: ['.ts', '.tsx', '.json', '.jsx', '.js'],
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, '../node_modules/'),
          options: {
            babelrc: false,
            configFile: false,
            presets: ['module:metro-react-native-babel-preset'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
        {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'file-loader',
          include: path.resolve(
            __dirname,
            '../',
            'node_modules/react-native-vector-icons/FontAwesome.js',
          ),
        },
      ],
    },
  }
}
