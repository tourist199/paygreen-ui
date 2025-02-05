import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
} from '../../shared/constants';
import { InputBase } from './style';

const Input = props => {
    const {
        status,
        label,
        hasShadow,
        blockWidth,
        marginTop,
        marginBottom,
        // remove mask from rest
        mask,
        ...rest
    } = props;

    const [stateMask, setMask] = useState('');
    const [stateStatus, setStatus] = useState(status);

    useEffect(() => {
        if (mask && mask.length) {
            setMask(mask);
        } else if (props.type === 'tel') {
            setMask('+99 (0)9 99 99 99 99');
        }
    }, [props.type, mask]);

    let animation = false;
    if (status !== stateStatus) {
        animation = true;

        setTimeout(() => {
            animation = false;
            setStatus(status);
        }, 1);
    }

    return (
        <Transition in={animation} timeout={900}>
            {keyframe => {
                return (
                    <InputBase
                        keyframe={keyframe}
                        theme={props.theme} // not necessary, only needed for tests
                        status={status}
                        inputType={props.type}
                        inputReadOnly={props.readOnly}
                        inputDisabled={props.disabled}
                        hasShadow={hasShadow}
                        blockWidth={blockWidth}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        {label ? (
                            <label htmlFor={props.id}>{label}</label>
                        ) : null}

                        <InputMask {...rest} mask={stateMask} />

                        <span></span>
                    </InputBase>
                );
            }}
        </Transition>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    hasShadow: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    mask: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

Input.defaultProps = {
    type: 'text',
    status: formStatusDefault,
    hasShadow: false,
    blockWidth: inputWidthDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Input;
