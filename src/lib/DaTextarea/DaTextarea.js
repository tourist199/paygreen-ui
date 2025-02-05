import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaTextareaBase } from './style';

const DaTextarea = props => {
    const [stateValue, setValue] = useState(
        props.value !== undefined ? props.value : '',
    );
    const [textAreaAutoHeight, setAutoHeight] = useState('');
    const [stateCharactersStatus, setCharactersStatus] = useState(
        formStatusDefault,
    );

    const {
        hasCounter,
        counterText,
        marginTop,
        marginBottom,
        isRounded,
        fieldSize,
        blockWidth,
        hasStaticWidth,
        inputRef,
        ...rest
    } = props;

    const handleChange = e => {
        setValue(e.target.value);
        setAutoHeight(e.target.scrollHeight + 'px');
    };

    const charactersLength = stateValue.length || 0;

    useEffect(() => {
        if (charactersLength > props.maxLength * 0.9) {
            setCharactersStatus(formStatusOptions.warning);
        } else if (charactersLength >= props.minLength) {
            setCharactersStatus(formStatusOptions.success);
        }
    }, [charactersLength]);

    const charactersCountBlock = (
        <div>
            <span>{charactersLength}</span>&nbsp;/&nbsp;{props.maxLength}&nbsp;
            {counterText}
        </div>
    );

    return (
        <DaTextareaBase
            theme={props.theme} // not necessary, only needed for tests
            charactersStatus={stateCharactersStatus}
            inputDisabled={props.disabled}
            inputReadOnly={props.readOnly}
            fieldSize={fieldSize}
            isRounded={isRounded}
            blockWidth={blockWidth}
            hasStaticWidth={hasStaticWidth}
            hasCounter={hasCounter}
            autoHeight={textAreaAutoHeight}
        >
            <textarea
                {...rest}
                ref={inputRef}
                value={stateValue}
                onChange={e => {
                    handleChange(e);
                    props.onChange ? props.onChange(e) : null;
                }}
            />

            {hasCounter && !props.disabled && !props.readOnly
                ? charactersCountBlock
                : null}
        </DaTextareaBase>
    );
};

DaTextarea.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    hasCounter: PropTypes.bool,
    counterText: PropTypes.string,
    isRounded: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasStaticWidth: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DaTextarea.defaultProps = {
    onChange: undefined,
    disabled: false,
    readOnly: false,
    minLength: 0,
    maxLength: 2000,
    hasCounter: false,
    counterText: 'characters',
    isRounded: false,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    fieldSize: buttonSizeDefault,
};

export default DaTextarea;
