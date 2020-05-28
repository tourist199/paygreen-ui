import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    spaceOptions,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaInputBase } from './style';

class DaInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            mask: '',
            status: props.status
        };
        
        if (props.mask && props.mask.length) {
            this.state.mask = props.mask;
        } else if (props.type === 'tel') {
            this.state.mask = '+99 (0)9 99 99 99 99';
        }
    }

    render() {
        const {
            status,
            label,
            hasShadow,
            blockWidth,
            marginTop,
            marginBottom,
            fieldSize,
            hasHelpButton,

            // remove mask from rest
            mask,
            
            ...rest
        } = this.props;

        let animation = false;
        if (status !== this.state.status) {
            animation = true;

            setTimeout(() => {
                animation =  false;
                this.setState({status: status});
            }, 1);
        }

        return <Transition in={animation} timeout={900}>
            {(keyframe) => {
                return (
                    <DaInputBase
                        keyframe={keyframe}
                        theme={this.props.theme} // not necessary, only needed for tests
                        status={status}
                        inputType={this.props.type}
                        inputReadOnly={this.props.readOnly}
                        inputDisabled={this.props.disabled}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                        fieldSize={fieldSize}
                        hasHelpButton={hasHelpButton}
                    >
                        <InputMask 
                            {...rest}
                            mask={this.state.mask}
                        />
                    </DaInputBase>
                );
            }}
        </Transition>;
    }
}

DaInput.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    mask: PropTypes.string,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    hasHelpButton: PropTypes.bool,
};

DaInput.defaultProps = {
    type: 'text',
    status: formStatusDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
    fieldSize: buttonSizeDefault,
    hasHelpButton: false,
};

export default DaInput;