import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaInputBase } from './style';

const DaInput = props => {
    const [stateMask, setMask] = useState('');
    const {
        isRounded,
        fieldSize,
        blockWidth,
        hasHelpButton,
        hasStaticWidth,
        icon,
        // remove mask from rest
        mask,
        ...rest
    } = props;

    useEffect(() => {
        if (mask && mask.length) {
            setMask(mask);
        } else if (props.type === 'tel') {
            setMask('+99 (0)9 99 99 99 99');
        }
    }, [props.type, mask]);

    return (
        <DaInputBase
            theme={props.theme} // not necessary, only needed for tests
            inputType={props.type}
            inputReadOnly={props.readOnly}
            inputDisabled={props.disabled}
            isRounded={isRounded}
            fieldSize={fieldSize}
            blockWidth={blockWidth}
            hasHelpButton={hasHelpButton}
            hasStaticWidth={hasStaticWidth}
            hasIcon={!!icon}
        >
            {icon
                ? React.cloneElement(icon, {
                      iconSize: fieldSize,
                  })
                : null}

            <InputMask {...rest} mask={stateMask} />
        </DaInputBase>
    );
};

DaInput.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    mask: PropTypes.string,
    isRounded: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasStaticWidth: PropTypes.bool,
    hasHelpButton: PropTypes.bool,
    icon: PropTypes.element,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DaInput.defaultProps = {
    type: 'text',
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    hasHelpButton: false,
    icon: null,
};

export default DaInput;
