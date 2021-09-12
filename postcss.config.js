module.exports = {
  Plugins: {
    autoprefiver: {},
    'postcss-px-to-Viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
      minnPixelValue: 1,
      mediaQuery: false
    }
  }
}
