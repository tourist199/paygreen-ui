import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import Pagination from './Pagination';

storiesOf(folder.table + folder.sub.pagination + 'Pagination', module)
    .addDecorator(withKnobs)
    .add('Pagination', () => (
        <Pagination
            pageCount={number('Pages count', 15, {
                range: true,
                min: 1,
                max: 20,
            })}
            pageIndex={number('Page index', 9, {
                range: true,
                max: 19,
            })}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            gotoPage={() => {}}
        />
    ));
