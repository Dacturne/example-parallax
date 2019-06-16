module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/labs': { page: '/labs' },
      '/portfolio': { page: '/portfolio' }
    };
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}
