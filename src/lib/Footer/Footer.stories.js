import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    decorationOptions,
    decorationDefault
} from '../../shared/constants';
import Grid from '../Grid/Grid';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Link from '../Link/Link';
import Footer from './Footer';

const sampleContents = [
    {
        title: 'Title 1',
        links: [
            'Link 1',
            'Second link',
            'Other link'
        ]
    },
    {
        title: 'Title two',
        links: [
            'New link',
            'Page with long title',
            'Link 78',
            'Fourth link'
        ]
    },
    {
        title: 'Third title',
        links: [
            'Little link',
            'Link',
            'Final link'
        ]
    }
];

storiesOf(folder.template + 'Footer', module)
    .addDecorator(withKnobs)
    .add(
        'Footer',
        () => (
            <Footer
                topStyle={radios(
                    'Wave top direction',
                    decorationOptions,
                    decorationDefault,
                )}
            >
                <Grid childrenFlex={1}>
                    {sampleContents.map((sample, index) => (
                        <div key={index}>
                            <Title
                                align="center"
                                textSize="xs"
                                colorWab="grey30"
                                hasUnderline={true}
                                marginBottom="xs"
                            >
                                {sample.title}
                            </Title>

                            <ul>
                                {sample.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#">
                                            <Link
                                                hasUnderline={false}
                                                colorPallet="wab"
                                                colorWab="grey50"
                                            >
                                                {link}
                                            </Link>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Grid>

                <Text
                    align="center"
                    textSize="xxs"
                    colorWab="grey30"
                    marginTop="xs"
                    marginBottom="xs"
                    marginInternal="none"
                >
                    PayGreen UI library – 2019
                </Text>
            </Footer>
        )
    );