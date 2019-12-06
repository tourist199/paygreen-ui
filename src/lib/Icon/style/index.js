import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { svgFill } from './constants';
import {
    removeButtonStyle,
    backgroundStyle,
    activeStyle
} from './base';

const IconBase = styled.span`
    ${props => props.htmlTag === 'button' ? removeButtonStyle : null};

    display: ${props => props.centered ? 'flex' : 'inline-flex'};
    box-sizing: content-box;
    position: relative;
    width: ${props => props.theme.iconSize[props.iconSize]};
    height: ${props => props.theme.iconSize[props.iconSize]};
    ${props => directionalProperty('margin',
        props.theme.space[props.marginTop],
        props.centered ? 'auto' : props.theme.space[props.marginRight],
        props.theme.space[props.marginBottom],
        props.centered ? 'auto' : props.theme.space[props.marginLeft]
    )};
    transition: all ${props => props.theme.transition.sm};

    svg {
        width: 100%;
        fill: ${props => svgFill[props.colorPallet]};
        transition: all ${props => props.theme.transition.sm};
    }

    ${props => props.background ? backgroundStyle : null};
    ${props => props.active ? activeStyle[props.colorPallet] : null};
`;

export { IconBase };