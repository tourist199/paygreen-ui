import { css } from 'styled-components';

const arrowBreakpoint = 'xl';
const arrowSize = props => props.theme.arrow[props.fieldSize];

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        border: solid ${arrowSize} transparent;
        border-top-color: ${props =>
            props.theme.color.status[props.colorStatus].light};
        transform-origin: top;
    }
`;

const arrowDefaultStyle = css`
    margin-top: ${arrowSize};

    &::after {
        transform: rotate(180deg);
        top: 0;
        right: ${arrowSize};
    }
`;

const arrowBlockStyle = {
    none: css``,
    top: css`
        ${arrowBase};
        ${arrowDefaultStyle};
    `,
    left: css`
        ${arrowBase};

        @media (${props => props.theme.query.max[arrowBreakpoint]}) {
            ${arrowDefaultStyle};
        }

        @media (${props => props.theme.query.min[arrowBreakpoint]}) {
            margin-left: ${arrowSize};

            &::after {
                transform: rotate(90deg);
                left: -${arrowSize};
                top: 50%;
            }
        }
    `,
    right: css`
        ${arrowBase};

        @media (${props => props.theme.query.max[arrowBreakpoint]}) {
            ${arrowDefaultStyle};
        }

        @media (${props => props.theme.query.min[arrowBreakpoint]}) {
            margin-right: ${arrowSize};

            &::after {
                transform: rotate(-90deg);
                right: -${arrowSize};
                top: 50%;
            }
        }
    `,
};

export { arrowBlockStyle, arrowSize };