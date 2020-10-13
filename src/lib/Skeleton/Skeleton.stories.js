import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    radios,
    number,
} from '@storybook/addon-knobs';
import {
    folder,
    greyOptions,
    spaceOptions,
    skeletonTypeOptions,
    shadowSizeOptions,
    shadowSizeDefault,
    radiusDefault,
    radiusOptions,
} from '../../shared/constants';
import Skeleton from './Skeleton';

const spaceOptionsCustom = {
    null: null,
    ...spaceOptions,
};

const colorWabLabel = 'Grey color';
const backgroundWabColorLabel = 'Background grey color';
const blockWidthLabel = 'Width';
const lineNumberLabel = 'Number of lines';
const shadowSizeLabel = 'Shadow size';
const borderRadiusLabel = 'Border radius';
const responsivePaddingLabel = 'Has responsive padding';
const paddingLabel = 'Padding';
const paddingTopLabel = 'Padding top';
const paddingBottomLabel = 'Padding bottom';
const paddingLeftLabel = 'Padding left';
const paddingRightLabel = 'Padding right';

storiesOf(folder.main + folder.sub.loading + 'Skeleton', module)
    .addDecorator(withKnobs)
    .add('Skeleton Text Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.textCard}
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.sm)}
            backgroundWabColor={select(
                backgroundWabColorLabel,
                greyOptions,
                greyOptions.grey10,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            lineNumber={number(lineNumberLabel, 3)}
            shadowSize={radios(
                shadowSizeLabel,
                shadowSizeOptions,
                shadowSizeOptions.none,
            )}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
            hasResponsivePadding={boolean(responsivePaddingLabel, false)}
            padding={select(paddingLabel, spaceOptions, spaceOptions.lg)}
            paddingTop={select(
                paddingTopLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingRight={select(
                paddingRightLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingLeft={select(
                paddingLeftLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingBottom={select(
                paddingBottomLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
        />
    ))
    .add('Skeleton Image Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.imageCard}
            backgroundWabColor={select(
                backgroundWabColorLabel,
                greyOptions,
                greyOptions.white00,
            )}
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.sm)}
            shadowSize={radios(
                shadowSizeLabel,
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            backgroundWabColor={select(
                backgroundWabColorLabel,
                greyOptions,
                greyOptions.white00,
            )}
            lineNumber={number(lineNumberLabel, 3)}
            hasResponsivePadding={boolean(responsivePaddingLabel, false)}
            padding={select(paddingLabel, spaceOptions, spaceOptions.lg)}
            paddingTop={select(
                paddingTopLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingRight={select(
                paddingRightLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingLeft={select(
                paddingLeftLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingBottom={select(
                paddingBottomLabel,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
        />
    ));
