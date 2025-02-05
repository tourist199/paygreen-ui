import { css } from 'styled-components';
import { math } from 'polished';
import { calculateSpace, blockSpace } from '../../../shared/spaces';

const gridAlign = {
    left: css``,
    center: css`
        margin-left: auto;
        margin-right: auto;
    `,
    right: css`
        margin-left: auto;
    `,
};

const childrenMargins = css`
    & > * {
        margin: ${props => props.theme.space[props.childrenMargin]} auto !important;

        @media ${props => props.theme.screen.min.md} {
            margin: ${props => props.theme.space[props.childrenMarginBig]} !important;
        }
    }
`;

const gridGap = css`
    gap: ${props =>
        blockSpace(
            'sm',
            calculateSpace(props.gridGap, 0, 1, 'space'),
            'space',
        )};

    @media ${props => props.theme.screen.min.lg} {
        gap: ${props =>
            blockSpace(
                'md',
                calculateSpace(props.gridGap, 0, 1, 'space'),
                'space',
            )};
    }
`;

const gridStyles = css`
    display: grid;
    justify-items: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};

    ${gridGap};
`;

const gridTemplate = {
    custom: css`
        @media ${props => props.theme.screen.min.md} {
            grid-template-columns: ${props => props.gridTemplateColumns};
        }
    `,
    auto: css`
        @media ${props => props.theme.screen.min.md} {
            grid-template-columns: repeat(
                ${props => props.columnNumber - 1},
                1fr
            );
        }

        @media ${props => props.theme.screen.min.lg} {
            grid-template-columns: repeat(${props => props.columnNumber}, 1fr);
        }
    `,
};

const displayStyle = {
    flex: css`
        @media ${props => props.theme.screen.min.md} {
            display: flex;
            flex-direction: ${props => props.flexDirection};
            flex-wrap: ${props => props.flexWrap};
            justify-content: ${props => props.justifyContent};
            align-items: ${props => props.alignItems};

            & > * {
                flex: ${props => props.childrenFlex};
            }
        }

        ${childrenMargins};
    `,
    grid: css`
        @media ${props => props.theme.screen.min.md} {
            ${gridStyles};
        }

        ${props =>
            props.gridTemplateColumns
                ? gridTemplate.custom
                : gridTemplate.auto};

        ${childrenMargins};
    `,
    column: css`
        & > * {
            padding: ${props =>
                    math(props.theme.space[props.childrenMargin] + '/2')}
                0;

            & > * {
                margin: 0 auto;
            }
        }

        @media ${props => props.theme.screen.min.md} {
            padding-top: ${props => props.theme.space[props.childrenMarginBig]};
            width: fit-content;
            columns: ${props => props.columnNumber - 1};
            gap: ${props => props.theme.blockSpace[props.gridGap]};

            & > * {
                padding: ${props => props.theme.space[props.childrenMarginBig]};
                padding-top: 0;
                padding-bottom: ${props => math(props.theme.space.lg + '*2')};
                display: inline-block;
                width: 100%;
                /* fix for shadow inside columns */
                transform: translateZ(0);
            }
        }

        @media ${props => props.theme.screen.min.lg} {
            columns: ${props => props.columnNumber};
        }
    `,
};

function childrenShift(count, shiftSize, isNegative, isReverse) {
    let styles = '';

    for (let i = 1; i <= count; i++) {
        styles += `
            &:nth-child(${isReverse ? count - i + 1 : i}) {
                margin-top: ${math(
                    (isNegative ? '-' : '') + shiftSize + '*' + (i - 1),
                )} !important;
            }
        `;
    }

    return css`
        & > * {
            @media ${props => props.theme.screen.min.xl} {
                ${styles};
            }
        }
    `;
}

export { gridGap, gridAlign, displayStyle, childrenShift };
