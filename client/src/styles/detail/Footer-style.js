import styled, { css } from 'styled-components';

const FooterLayout = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 100%;
            height: 3vw;

            background-color: ${colors.white};
            background-size: cover;

            text-align: center;
            color: ${colors.primary};

            ${device.mobile} {
                font-size: ${fonts.size.xxsm};
            }
        `;
    }}
`;

export default FooterLayout;
