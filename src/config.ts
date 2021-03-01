type configOptions = {
  breakpoints: object;
};

// REM to PX conversion: REM * 16 or 105 * 16 = 1680px
const getConfig: configOptions = {
  breakpoints: {
    xs: '32rem',
    sm: '45rem',
    md: '64rem',
    lg: '80rem',
    xl: '90rem',
    xxl: '105rem',
  },
};

export default getConfig;
