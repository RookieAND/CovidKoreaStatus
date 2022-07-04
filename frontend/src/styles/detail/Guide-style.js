import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GuideLayout = styled.div`
    ${() => {
        return css`
            width: 100vw;
            height: 27.5vw;

            background-image: linear-gradient(rgba(184, 228, 255, 0.3), rgba(255, 255, 255, 0.15));
            background-size: cover;
        `;
    }}
`;

const GuideLine = styled.div`
    ${() => {
        return css`
            position: relative;
            top: 12.5%;

            width: 60vw;
            height: 16vw;

            margin: auto 20vw;

            display: flex;
            justify-content: space-between;
            align-items: center;

            text-align: center;
        `;
    }}
`;

const GuideElement = styled.div`
    ${({ theme }) => {
        const { fonts } = theme;
        return css`
            width: 15vw;
            height: 12vw;

            margin: auto 0vw;
            text-align: center;

            h5 {
                margin: 1vw 0vw 0.5vw 0vw;
                font-weight: ${fonts.weight.bold};
                font-size: ${fonts.size.xl};
            }

            p {
                margin: 0;
                font-size: ${fonts.size.sm};
            }
        `;
    }}
`;

const GuideElementIcon = styled(FontAwesomeIcon)`
    ${({ theme }) => {
        const { colors, fonts } = theme;
        return css`
            padding: 2vw 1.75vw;
            margin: 0.5vw;

            background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
            border-radius: 1vw;

            color: ${colors.white};
            font-size: ${fonts.size.title};
        `;
    }}
`;

const GuideStyledComponents = { GuideLayout, GuideLine, GuideElement, GuideElementIcon };

export default GuideStyledComponents;
