import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Title from './Title';

storiesOf(folder.text + 'Title', module)
    .addDecorator(withKnobs)
    .add('Title', () => (
        <Title
            hasUnderline={boolean('Underline', true)}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={radios(
                'Color pallet',
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select('Grey color', greyOptions, greyOptions.grey60)}
            colorStatus={select(
                'Status color',
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select('Size', fontSizeOptions, fontSizeOptions.lg)}
            align={radios('Align', alignOptions, alignDefault)}
            marginLateral={select('Lateral margin', spaceOptions, spaceDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            Your title with <strong>an emphasis</strong>
        </Title>
    ));
