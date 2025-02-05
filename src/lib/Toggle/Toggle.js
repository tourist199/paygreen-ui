import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
} from '../../shared/constants';
import { ToggleBase } from './style';

const Toggle = ({
    id,
    checkedLabel,
    notCheckedLabel,
    children,
    colorPallet,
    colorTheme,
    colorWab,
    colorStatus,
    ...rest
}) => {
    return (
        <ToggleBase
            theme={rest.theme} // not necessary, only needed for tests
            colorPallet={colorPallet}
            colorTheme={colorTheme}
            colorWab={colorWab}
            colorStatus={colorStatus}
        >
            {children ? <span className="legend">{children}</span> : null}

            <label htmlFor={id}>
                <input type="checkbox" {...rest} id={id} />

                <div className="toggle">
                    <span className="checked-label">
                        {checkedLabel || null}
                    </span>

                    <span className="not-checked-label">
                        {notCheckedLabel || null}
                    </span>
                </div>
            </label>
        </ToggleBase>
    );
};

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    checkedLabel:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    notCheckedLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Toggle.defaultProps = {
    colorPallet: colorPalletOptions.status,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusOptions.success,
};

export default Toggle;
