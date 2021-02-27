// $xs: 32rem; // ~512px
// $sm: 45rem; // ~720px
// $md: 64rem; // ~1024px
// $lg: 80rem; // ~1280px
// $xl: 90rem; // ~1440px
// $xxl: 105rem; // ~1680px

type configOptions = {
  breakpoints: object;
};

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
