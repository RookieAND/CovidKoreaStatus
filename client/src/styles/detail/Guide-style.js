import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GuideLayout = styled.div`
    ${({ theme }) => {
        const { device } = theme;
        return css`
            width: 100vw;
            height: 25vw;

            background-image: linear-gradient(rgba(184, 228, 255, 0.3), rgba(255, 255, 255, 0.15));
            background-size: cover;

            ${device.mobile} {
                height: 40vw;
            }
        `;
    }}
`;

const GuideLine = styled.div`
    ${({ theme }) => {
        const { device } = theme;
        return css`
            position: relative;
            top: 12.5%;

            width: 50vw;
            height: 16vw;

            margin: auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            text-align: center;

            ${device.mobile} {
                width: 80vw;
                height: 16vw;
            }
        `;
    }}
`;

const GuideElement = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 15vw;
            height: 12vw;

            margin: auto 0vw;
            text-align: center;

            color: ${colors.primary};

            h5 {
                margin: 1vw 0vw 0.5vw 0vw;
                font-weight: ${fonts.weight.bold};
                font-size: ${fonts.size.xl};
            }

            p {
                margin: 0;
                font-size: ${fonts.size.sm};
            }

            ${device.mobile} {
                width: 20vw;
                h5 {
                    font-size: ${fonts.size.xsm};
                }

                p {
                    font-size: ${fonts.size.xxsm};
                }
            }
        `;
    }}
`;

const GuideElementIcon = styled(FontAwesomeIcon)`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            padding: 2vw 1.75vw;
            margin: 0.5vw;

            background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
            border-radius: 1vw;

            color: ${colors.white};
            font-size: ${fonts.size.title};

            ${device.mobile} {
                font-size: ${fonts.size.lg};
            }
        `;
    }}
`;

const GuideStyledComponents = { GuideLayout, GuideLine, GuideElement, GuideElementIcon };

export default GuideStyledComponents;
