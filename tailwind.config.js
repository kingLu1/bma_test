module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          red: '#E24040',
          yellow: '#FFCC03',
          cyan: '#52F1EC',
          white_smoke: '#F7F7F7',
          azure: '#EDF0F0',
          dim_gray: '#707070',
          storm_grey: '#848589',
          ebony: '#2F323A',
          navy_blue: '#44099F',
          brilliant_blue: '#5064CC',
          grayish_blue: '#4A566E',
          mischka: '#B6B7BA'

        },
      }
    },
  },
  variants: {},
  plugins: [],
}
