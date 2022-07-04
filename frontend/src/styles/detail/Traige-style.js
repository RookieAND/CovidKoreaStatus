import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TraigeLayout = styled.div`
    ${() => {
        return css`
            position: relative;
            top: 0;

            width: 100vw;
            height: 60vw;

            background-image: linear-gradient(rgba(184, 228, 255, 0.3), rgba(255, 255, 255, 0.15));
            background-size: cover;
        `;
    }}
`;

const TraigeLoadingSection = styled.div`
    ${() => {
        return css`
            width: 70vw;
            height: 36vw;

            margin: 0vw auto;

            position: relative;
            top: 7.5vw;
        `;
    }}
`;

const TraigeSection = styled(TraigeLoadingSection)`
    ${() => {
        return css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 0.4vw 0.4vw;
        `;
    }}
`;

const TraigeSidoSelect = styled.ul`
    ${({ theme }) => {
        const { colors, fonts } = theme;
        return css`
            width: 37.5vw;
            height: 5.5vw;

            position: relative;
            top: 5.5vw;

            margin: 0vw auto;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: flex-start;

            list-style-type: none;
            text-align: center;
            vertical-align: middle;

            li {
                display: inline-block;
                padding: 0.5vw 0.75vw;
                margin: 0vw 0.5vw;
                border-radius: ${fonts.size.base};
                box-shadow: 0vw 0.15vw 0.1vw rgba(0, 101, 202, 0.5);

                background-color: ${colors.white};
                transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

                color: rgb(0, 112, 172);
                font-size: ${fonts.size.lg};
            }
        `;
    }}
`;

const TraigeRoom = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme;
        return css`
            width: 100%;
            height: 100%;

            background-color: ${colors.white};
            border-radius: 1vw;
            border: 1px solid rgba(0, 157, 255, 0.2);
            box-shadow: 3px rgb(0, 157, 255);

            text-align: center;
            color: ${colors.primary};

            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

            h5 {
                margin: 7.5% auto 0% auto;
                font-size: ${fonts.size.xl};
                font-family: ${fonts.weight.bold};
            }

            p {
                margin: 2.5% 15%;
                font-size: ${fonts.size.base};
            }
        `;
    }}
`;

const TraigeRoomOption = styled.div`
    ${() => {
        return css`
            width: 60%;
            height: 40%;

            margin: 0vw auto;

            display: flex;
            justify-content: space-between;
            align-items: center;

            text-align: center;
        `;
    }}
`;

const TraigeRoomOptionIcon = styled(FontAwesomeIcon)`
    ${({ theme }) => {
        const { colors, fonts } = theme;
        return css`
            padding: 0.5vw 0.45vw;
            margin: 0vw auto;

            background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
            border-radius: 1vw;

            color: ${colors.white};
            font-size: ${fonts.size.base};
        `;
    }}
`;

const TraigeStyledComponent = {
    TraigeLayout,
    TraigeLoadingSection,
    TraigeSection,
    TraigeSidoSelect,
    TraigeRoom,
    TraigeRoomOption,
    TraigeRoomOptionIcon,
};

export default TraigeStyledComponent;
