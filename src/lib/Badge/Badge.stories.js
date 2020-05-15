import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    select,
    radios,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    blockWidthOptions,
    iconSizeDefault,
    iconSizeOptions,
} from '../../shared/constants';
import { ArrowBottomIcon } from '../Icon/Icon';
import Badge from './Badge';

storiesOf(folder.main + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            isWhite={boolean('White', false)}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                'Gradient type',
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select('Text size', blockWidthOptions, blockWidthOptions.sm)}
        >
            {text('Text', 'Example')}
            {boolean('With icon', true) && (
                <ArrowBottomIcon
                    colorPallet={boolean('White', false) ? 'theme' : 'wab'}
                    colorWab="white00"
                    colorTheme={select(
                        'Color theme',
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    iconSize={select(
                        'Icon size',
                        iconSizeOptions,
                        iconSizeOptions.xs,
                    )}
                />
            )}
        </Badge>
    ));
