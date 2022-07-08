const margins = {
    sm: '.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
};

const paddings = {
    sm: '.5rem',
    base: '1rem',
    lg: '2rem',
    xl: '3rem',
};

const fonts = {
    family: {
        base: `'Nanumsquare', sans-serif`,
        title: `'Noto Sans KR', serif`,
    },
    size: {
        xxsm: '.5rem',
        xsm: '1rem',
        sm: '1.4rem',
        base: '1.6rem',
        lg: '2rem',
        xl: '2.5rem',
        xxl: '4rem',
        title: '6rem',
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700,
    },
};

const colors = {
    red: '#ff4d4d',
    yellow: '#ffff4d',
    blue: '#0099ff',
    white: '#ffffff',
    primary: '#011f4b',
    secondary: '#03396c',
};

const size = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기 위해 선언된 변수
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

export const defalutTheme = {
    margins,
    paddings,
    fonts,
    device,
    colors,
};
