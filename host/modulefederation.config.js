const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
  },
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
