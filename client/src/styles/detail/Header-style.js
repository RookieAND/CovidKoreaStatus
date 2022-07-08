import styled, { css } from 'styled-components';

const HeaderLayout = styled.div`
    ${() => {
        return css`
            width: 100vw;
            height: 35vw;
        `;
    }}
`;

const Background = styled.div`
    ${() => {
        return css`
            width: 100vw;
            height: 32.25vw;

            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)), url(img/header.jpg);
            background-size: cover;
        `;
    }}
`;

const HeaderTitle = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            position: relative;
            top: 35%;

            margin: 0;
            padding: 2.5vw;
            background-color: rgba(0, 0, 0, 0.15);

            text-align: center;
            color: ${colors.white};

            h1 {
                margin: 0;
                font-size: ${fonts.size.title};
            }

            p {
                margin: 0.4vw;
                font-size: ${fonts.size.xl};
            }

            ${device.mobile} {
                top: 30%;

                h1 {
                    font-size: ${fonts.size.lg};
                }

                p {
                    font-size: ${fonts.size.sm};
                }
            }
        `;
    }}
`;

const HeaderStyledComponents = { HeaderLayout, HeaderTitle, Background };

export default HeaderStyledComponents;
