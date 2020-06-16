import { css } from 'styled-components';

const isCheckboxStyle = css`
    @media (${props => props.theme.query.min.lg}) {
        font-size: 0;
    }
`;

const mobileStyle = css`
    @media (${props => props.theme.query.max.lg}) {
        display: flex;
        align-items: center;
    }
`;

const hideUselessCell = css`
    @media (${props => props.theme.query.max.lg}) {
        display: none;
    }
`;

export { isCheckboxStyle, mobileStyle, hideUselessCell };