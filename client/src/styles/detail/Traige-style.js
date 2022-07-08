import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TraigeLayout = styled.div`
    ${() => {
        return css`
            position: relative;
            top: 0;

            width: 100vw;

            background-image: linear-gradient(rgba(184, 228, 255, 0.3), rgba(255, 255, 255, 0.15));
            background-size: cover;
        `;
    }}
`;

const TraigeSection = styled.div`
    ${({ theme }) => {
        return css`
            width: 80vw;

            margin: 2vw auto;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 0.4vw 0.4vw;

            ${theme.device.mobile} {
                width: 92.5vw;
            }
        `;
    }}
`;

const TraigeSidoSelect = styled.ul`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 37.5vw;
            height: 5.5vw;

            margin: 5vw auto 0vw auto;

            display: flex;
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
                cursor: pointer;

                color: ${colors.secondary};
                font-size: ${fonts.size.lg};

                &.selected {
                    background-color: ${colors.secondary};
                    color: ${colors.white};
                    box-shadow: 0vw 0.15vw 0.1vw rgba(13, 71, 161, 0.5);
                }
            }

            ${device.mobile} {
                width: 60vw;
                height: 10vw;

                margin: 6.5vw auto 0vw auto;

                li {
                    padding: 0.35vw 0.6vw;
                    margin: 0vw 0.4vw;

                    font-size: ${fonts.size.xsm};
                }
            }
        `;
    }}
`;

const TraigePageSelect = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 20vw;

            margin: 0vw auto;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: flex-start;

            p {
                margin: 0.5vw auto;
                vertical-aligh: center;

                color: ${colors.primary};
                font-size: ${fonts.size.xl};
            }

            ${device.mobile} {
                margin: 4vw auto;
                p {
                    margin: 2.5% 5%;
                    font-size: ${fonts.size.sm};
                }
            }
        `;
    }}
`;

const TraigeRoom = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            background-color: ${colors.white};
            border-radius: 1vw;
            border: 1px solid rgba(0, 157, 255, 0.2);
            box-shadow: 3px rgb(0, 157, 255);

            text-align: center;
            color: ${colors.primary};

            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

            h5 {
                margin: 5% auto 0% auto;
                font-size: ${fonts.size.xl};
                font-family: ${fonts.weight.bold};
            }

            p {
                margin: 2.5% 10%;
                font-size: ${fonts.size.base};
            }

            ${device.mobile} {
                h5 {
                    font-size: ${fonts.size.xsm};
                }

                p {
                    margin: 2.5% 5%;
                    font-size: ${fonts.size.xxsm};
                }
            }
        `;
    }}
`;

const TraigeRoomOption = styled.div`
    ${({ theme }) => {
        const { fonts, device } = theme;
        return css`
            width: 100%;

            margin: auto;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            text-align: center;

            div {
                width: 50%;
            }

            p {
                font-size: ${fonts.size.sm};
            }

            ${device.mobile} {
                margin: 0vw auto 0.5vw auto;
                p {
                    font-size: ${fonts.size.xxsm};
                }
            }
        `;
    }}
`;

const OptionIcon = styled(FontAwesomeIcon)`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            padding: 0.35vw 0.25vw;
            margin: 0vw auto;

            background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
            border-radius: 1vw;

            color: ${colors.white};
            font-size: ${fonts.size.base};

            ${device.tablet} {
                padding: 0.35vw 0.25vw;
                font-size: ${fonts.size.xsm};
            }
        `;
    }}
`;

const PageIcon = styled(FontAwesomeIcon)`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            padding: 0.35vw 0.75vw;
            margin: 0vw auto;

            background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
            border-radius: 0.25vw;

            color: ${colors.white};
            font-size: ${fonts.size.xl};

            &.off {
                background: linear-gradient(rgb(125, 125, 125), rgb(105, 105, 105));
            }

            &.on {
                background: linear-gradient(rgb(0, 117, 190), rgb(0, 148, 202));
                cursor: pointer;
            }

            ${device.mobile} {
                font-size: ${fonts.size.sm};
            }
        `;
    }}
`;

const TraigeStyledComponent = {
    TraigeLayout,
    TraigeSection,
    TraigeSidoSelect,
    TraigePageSelect,
    TraigeRoom,
    TraigeRoomOption,
    OptionIcon,
    PageIcon,
};

export default TraigeStyledComponent;
