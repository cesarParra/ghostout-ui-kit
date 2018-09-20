module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'GhostoutUIKit',
      externals: {
        react: 'React'
      }
    }
  }
}
