const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  remotes: {
    remote: 'remote@http://localhost:3000/remoteEntry.js',
  },
  exposes: {
    './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      requiredVersion: dependencies['react'],
      strictVersion: true
    },
    'react-dom': {
      requiredVersion: dependencies['react-dom'],
      strictVersion: true
    },
  },
};
