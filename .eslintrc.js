module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    babelOptions: {
      // "configFile": "babel.config.js" //When linting it only works with absolute path
      // Here starts the configuration
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        'react-app'
      ],
      plugins: ['@babel/plugin-syntax-class-properties', '@babel/plugin-proposal-class-properties']
      // Here ends the configuration
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
