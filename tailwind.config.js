/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    future: {
      removeDeprecatedGapUtilities: true,
    },
    screens: {
      xs: { 'max': '767px' },
      sm: { 'min': '768px', 'max': '1018px' },
      md: { 'min': '1019px', 'max': '1140px' },
      lg: { 'min': '1141px' },
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 1 0%',
    }
  },
  variants: {},
  plugins: []
}
