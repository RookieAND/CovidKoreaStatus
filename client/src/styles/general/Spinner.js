import styled, { css } from 'styled-components';

export const Spinner = styled.div`
    ${({ theme }) => {
        const { colors, fonts, device } = theme;
        return css`
            width: 70vw;
            height: 30vw;

            margin: 2vw auto;

            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                margin: 0vw auto;
                color: ${colors.primary};
                font-size: ${fonts.size.xl};
            }

            .loader {
                margin: 7.5vw auto;

                border: 16px solid #f3f3f3;
                border-top: 16px solid #3498db;
                border-radius: 50%;
                width: 120px;
                height: 120px;
                animation: spin 1.5s cubic-bezier(0.45, 0.82, 0.265, 0.9) infinite;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            ${device.mobile} {
                .loader {
                    border: 8px solid #f3f3f3;
                    border-top: 8px solid #3498db;
                    width: 30px;
                    height: 30px;
                }

                p {
                    font-size: ${fonts.size.xsm};
                }
            }
        `;
    }}
`;
