import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${normalize};

    html, body {
        width: 100%;
        height: 100%;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-size: 1.6rem;
    }

    ${({ theme }) => {
        const { fonts } = theme;
        return css`
            body {
                font-family: ${fonts.family.base};
                font-weight: ${fonts.weight.normal};
                font-size: ${fonts.size.base};
            }
        `;
    }}
`;

export default GlobalStyle;
