import styled, { css } from 'styled-components';

const ContainerLayout = styled.div`
    ${({ theme }) => {
        return css`
            position: relative;
            top: 0;

            width: 100%;
            background-image: ${theme.colors.white};
            background-size: cover;
        `;
    }}
`;

export default ContainerLayout;
