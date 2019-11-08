import React from 'react'
import Textarea from './Textarea';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';

it('renders without crashing', () => {
    const textarea = TestRenderer.create(
        <Textarea
            theme={ThemeDefault}
            id="textareaTest1"
            placeholder="Your text&hellip;"
            label="Your message"
            params={{
                shadow: false,
                counter: true
            }}
        />
    );
    expect(textarea.toJSON()).toMatchSnapshot();
});