import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    radios,
    select,
    boolean,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Text from './Text';

const { div, p, ...newHtmlTagOptions } = textHtmlTagOptions;

storiesOf(folder.main + 'Text', module)
    .addDecorator(withKnobs)
    .add(
        'Single paragraph',
        () => (
            <Text
                colorType={radios(
                    'Color type',
                    colorTypeOptions,
                    colorTypeDefault,
                )}
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
                textSize={select('Size', fontSizeOptions, fontSizeDefault)}
                align={radios('Align', alignOptions, alignDefault)}
                hasUppercase={boolean('Uppercase', false)}
                hasUnderline={boolean('Underline', false)}
                marginLateral={select(
                    "Block's lateral margins",
                    spaceOptions,
                    spaceDefault,
                )}
                marginTop={select(
                    "Block's margin top",
                    spaceOptions,
                    spaceDefault,
                )}
                marginBottom={select(
                    "Block's margin bottom",
                    spaceOptions,
                    spaceDefault,
                )}
            >
                Lorem ipsum dolor sit amet, consectetur{' '}
                <Text
                    htmlTag={textHtmlTagOptions.strong}
                    colorType={radios(
                        'Color type',
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
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
                    colorWab={select(
                        'Grey color',
                        greyOptions,
                        greyOptions.grey60,
                    )}
                    colorStatus={select(
                        'Status color',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    textSize={select('Size', fontSizeOptions, fontSizeDefault)}
                >
                    adipiscing elit
                </Text>
                . Donec eget{' '}
                <Text
                    htmlTag={textHtmlTagOptions.em}
                    colorType={radios(
                        'Color type',
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
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
                    colorWab={select(
                        'Grey color',
                        greyOptions,
                        greyOptions.grey60,
                    )}
                    colorStatus={select(
                        'Status color',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    textSize={select('Size', fontSizeOptions, fontSizeDefault)}
                >
                    nulla in libero
                </Text>{' '}
                laoreet sodales. Fusce vestibulum at neque nec convallis.
                Vivamus quis neque vulputate, fringilla massa vitae, interdum
                ipsum. Duis enim augue, euismod quis aliquam in, consequat quis
                risus.
            </Text>
        ),
        {
            notes:
                'Text component must be used to adding any text without specific component, or inside components like Card.',
        },
    )
    .add(
        'Block of paragraphs',
        () => (
            <Text
                htmlTag={textHtmlTagOptions.div}
                colorType={radios(
                    'Color type',
                    colorTypeOptions,
                    colorTypeDefault,
                )}
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
                textSize={select('Size', fontSizeOptions, fontSizeDefault)}
                align={radios('Align', alignOptions, alignDefault)}
                marginLateral={select(
                    "Block's lateral margins",
                    spaceOptions,
                    spaceDefault,
                )}
                marginTop={select(
                    "Block's margin top",
                    spaceOptions,
                    spaceDefault,
                )}
                marginBottom={select(
                    "Block's margin bottom",
                    spaceOptions,
                    spaceDefault,
                )}
                marginInternal={select(
                    'Internal margin',
                    spaceOptions,
                    spaceOptions.sm,
                )}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur{' '}
                    <strong>adipiscing elit</strong>. Donec eget nulla in libero
                    laoreet sodales. Fusce vestibulum at neque nec convallis.
                    Vivamus quis neque vulputate, fringilla massa vitae,
                    interdum ipsum. Duis enim augue, euismod quis aliquam in,
                    consequat quis risus.
                </p>

                <p>
                    Etiam diam elit, fringilla sit amet blandit sit amet,{' '}
                    <em>rutrum varius est</em>. Integer gravida vel urna nec
                    interdum. Suspendisse vel quam et libero pellentesque
                    aliquet. Sed est velit, dignissim eget nunc a, ornare tempor
                    odio. In efficitur, leo in vestibulum posuere, tellus enim
                    porttitor nisl, a tincidunt mauris quam sit amet mi.
                </p>

                <p>
                    Nam rhoncus ligula posuere justo consequat. Suspendisse nunc
                    nulla, pellentesque at tellus et, hendrerit facilisis dolor.
                    Sed a dignissim mauris.
                </p>
            </Text>
        ),
        {
            notes:
                'If you want to add more than paragraph, put your text inside <code>&lt;p&gt;</code> tags and pass htmlTag prop to "div".',
        },
    )
    .add(
        'Quote or emphasis',
        () => (
            <Text
                colorType={radios(
                    'Color type',
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorPallet={radios(
                    'Color pallet',
                    colorPalletOptions,
                    colorPalletDefault,
                )}
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select('Grey color', greyOptions, greyDefault)}
                colorStatus={select(
                    'Status color',
                    formStatusOptions,
                    formStatusDefault,
                )}
                hasBackground={true}
                radiusSize={radios(
                    'Radius size',
                    radiusOptions,
                    radiusOptions.sm,
                )}
                paddingLateral={spaceOptions.lg}
                paddingTop={spaceOptions.lg}
                paddingBottom={spaceOptions.lg}
                marginLateral={spaceOptions.sm}
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur{' '}
                <strong>adipiscing elit</strong>. Donec eget nulla in libero
                laoreet sodales. Fusce vestibulum at neque nec convallis.
                Vivamus quis neque vulputate, fringilla massa vitae, interdum
                ipsum. Duis enim augue, euismod quis aliquam in, consequat quis
                risus.
            </Text>
        ),

        {
            notes:
                'You can change background-color, border-radius, text color, margins and paddings on your Text component.',
        },
    )
    .add(
        'Test new htmlTags',
        () => (
            <>
                <Text
                    htmlTag={textHtmlTagOptions.strong}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Strong Text
                </Text>

                <Text
                    htmlTag={textHtmlTagOptions.em}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Emphasis Text
                </Text>

                <Text
                    htmlTag={textHtmlTagOptions.q}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Quote Text
                </Text>

                <Text
                    htmlTag={textHtmlTagOptions.sub}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    Subscript Text
                </Text>

                <Text
                    htmlTag={textHtmlTagOptions.kbd}
                    marginLateral={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.sm}
                >
                    KeyBoard Text
                </Text>
                <br />
                <Text
                    htmlTag={select(
                        'Html tags',
                        newHtmlTagOptions,
                        textHtmlTagOptions.span,
                    )}
                    colorType={radios(
                        'Color type',
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
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
                    colorWab={select(
                        'Grey color',
                        greyOptions,
                        greyOptions.grey60,
                    )}
                    colorStatus={select(
                        'Status color',
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    marginLateral={spaceOptions.sm}
                >
                    {text('texte', 'Try Me!')}
                </Text>
            </>
        ),

        {
            notes:
                'You can change background-color, border-radius, text color, margins and paddings on your Text component.',
        },
    );
