import styled, { css } from 'styled-components';

const NavbarLayout = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 60vw;
            height: 2.75vw;

            padding: 0vw 20vw;

            background-color: ${colors.white};

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;

            list-style-type: none;
            text-align: center;
            vertical-align: middle;

            font-family: ${fonts.family.base};

            ${device.mobile} {
                height: 3vw;
            }
        `;
    }}
`;

const NavbarOption = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 5vw;
            margin: auto 2.5vw;

            color: rgb(0, 112, 172);
            font-size: ${fonts.size.base};
            transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

            ${device.mobile} {
                width: 10vw;
                font-size: ${fonts.size.xxsm};
            }

            &:hover {
                padding: 0.1vw 0.15vw;
                background-color: rgb(0, 112, 172);

                color: ${colors.white};
                font-weight: ${fonts.weight.bold};
            }
        `;
    }}
`;

const NavbarStyledComponent = { NavbarLayout, NavbarOption };

export default NavbarStyledComponent;
