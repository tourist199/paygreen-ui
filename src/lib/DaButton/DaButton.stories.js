import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    buttonStyleDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    formStatusOptions,
    formStatusDefault,
    gradientOptions,
    gradientDefault,
} from '../../shared/constants';
import DaButton from './DaButton';
import { CoinsIcon } from '../Icon/Icon';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.form + folder.sub.button + 'DaButton', module)
    .addDecorator(withKnobs)
    .add('DaButton', () => (
        <button type="button">
            <DaButton
                buttonStyle={radios(
                    'Button style',
                    buttonStyleOptions,
                    buttonStyleDefault,
                )}
                buttonSize={radios(
                    'Button size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                colorType={radios(
                    'Color type',
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                gradient={radios(
                    'Gradient type',
                    gradientOptions,
                    gradientDefault,
                )}
                colorPallet={radios(
                    'Color pallet',
                    buttonColorPalletOptions,
                    colorPalletDefault,
                )}
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorStatus={select(
                    'Status color',
                    formStatusOptions,
                    formStatusDefault,
                )}
                isDisabled={boolean('Disabled', false)}
                icon={<CoinsIcon />}
            >
                {text('Label', 'CTA button')}
            </DaButton>
        </button>
    ));
