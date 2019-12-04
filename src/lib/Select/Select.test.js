import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Select from './Select';

const sampleOptions = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    }
];

it('renders without crashing', () => {
    const selectBlock = TestRenderer.create(
        <Select
            theme={ThemeDefault}
            id="selectId1"
            label="Your choice"
            options={sampleOptions}
            
        />
    );
    expect(selectBlock.toJSON()).toMatchSnapshot();
});