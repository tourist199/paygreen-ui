import styled from 'styled-components';
import { yaxisStyle } from './base';

const HistogramBase = styled.div`
    position: relative;
    display: flex;
    box-sizing: content-box;
    height: ${props => props.theme.histogram.height[props.blockHeight]};
    width: fit-content;
    min-width: ${props => props.theme.histogram.height.xs};
    padding: ${props => props.theme.space.sm};
    padding-bottom: 0;
    border: solid
        ${props => props.theme.line + ' ' + props.theme.wab.grey20};
    border-top: none;
    border-right: none;
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};

    ${props => props.hasYaxis ? yaxisStyle : null};
`;

export { HistogramBase };
