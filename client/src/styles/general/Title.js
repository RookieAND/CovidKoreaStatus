import styled, { css } from 'styled-components';

export const TitleSection = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            position: relative;
            top: 3vw;

            color: ${colors.primary};

            h3 {
                margin: 0;

                text-align: center;
                font-weight: ${fonts.weight.bold};
                font-size: ${fonts.size.xxl};
            }

            h3::after {
                content: '';
                display: block;
                width: ${fonts.size.xxl};
                margin: 0.25vw auto 0.5vw auto;
                border-bottom: 2px solid #141414;
            }

            p {
                top: 12%;
                margin: 0;

                text-align: center;
                font-size: ${fonts.size.base};
            }

            ${device.mobile} {
                h3 {
                    font-size: ${fonts.size.base};
                }

                h3::after {
                    width: ${fonts.size.base};
                }

                p {
                    font-size: ${fonts.size.xxsm};
                }
            }
        `;
    }}
`;
