import styled, { css } from 'styled-components';

const CovidStatusLayout = styled.div`
    ${({ theme }) => {
        const { device } = theme;
        return css`
            width: 100vw;
            height: 50vw;

            background-image: linear-gradient(rgba(184, 228, 255, 0.3), rgba(255, 255, 255, 0.15));
            background-size: cover;

            ${device.mobile} {
                height: 60vw;
            }
        `;
    }}
`;

const CovidGraphSection = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 80vw;
            height: 30vw;

            position: relative;
            top: 10%;

            margin: 0vw auto;

            text-align: center;
            font-size: ${fonts.size.base};

            h1 {
                padding: 0.5vw 1vw;
                margin: 0vw 25vw 2vw 25vw;
                background-color: rgba(0, 102, 176, 0.8);

                color: ${colors.white};
                font-size: ${fonts.size.xl};
            }

            canvas {
                padding: 1.5vw 1vw;
                background-color: ${colors.white};
                border-radius: ${fonts.size.xl};
                box-shadow: 0vw 0.15vw 0.1vw rgba(0, 101, 202, 0.5);
            }

            ${device.mobile} {
                width: 95vw;
                h1 {
                    font-size: ${fonts.size.sm};
                    margin: 0vw 25vw 4vw 25vw;
                }

                canvas {
                    padding: 4vw 0vw;
                    border-radius: 0px;
                    box-shadow: 0vw 0.25vw 0.2vw rgba(0, 101, 202, 0.5);
                }
            }
        `;
    }}
`;

const CovidStatusStyledComponents = { CovidStatusLayout, CovidGraphSection };

export default CovidStatusStyledComponents;
