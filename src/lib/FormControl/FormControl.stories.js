import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    arrowBlockOptions,
    buttonSizeOptions,
    fontSizeOptions,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
} from '../../shared/constants';
import DaHelp from '../DaHelp/DaHelp';
import DaInput from '../DaInput/DaInput';
import DaLabel from '../DaLabel/DaLabel';
import DaSelect from '../DaSelect/DaSelect';
import DaTextarea from '../DaTextarea/DaTextarea';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Text from '../Text/Text';
import { QuestionBoldIcon } from '../Icon/Icon';
import FormControl from './FormControl';

const colorStatusLabel = 'Status color';
const isRequiredLabel = 'Is required';

const selectOptions = [
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
    },
    {
        value: 'third',
        text: 'Third option',
    },
];

const checkboxOptions = [
    {
        label: 'First Choice',
        value: 'first',
    },
    {
        label: 'Second Choice',
        value: 'second',
    },
    {
        label: 'Third Choice',
        value: 'third',
    },
];

const MessageContent = (
    <Text textSize={fontSizeOptions.xs}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis
        erat, porttitor vel.
    </Text>
);

storiesOf(folder.form + 'FormControl', module)
    .addDecorator(withKnobs)
    .add('FormControl with DaSelect', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
        >
            <DaLabel>Select label</DaLabel>

            <DaSelect
                defaultValue=""
                options={selectOptions}
                blockWidth={inputWidthOptions.sm}
            />
        </FormControl>
    ))
    .add('FormControl with DaInput, DaHelp and Message', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
            hasHelpButton={true}
        >
            <DaLabel>Input label</DaLabel>

            <DaInput
                placeholder="Firstname Lastname"
                blockWidth={inputWidthOptions.sm}
                hasHelpButton={true}
            />

            <DaHelp>
                <QuestionBoldIcon />
            </DaHelp>

            {boolean('Is DaHelp clicked', true) ? (
                <Message
                    arrowBlock={arrowBlockOptions.topRight}
                    blockWidth={inputWidthOptions.sm}
                >
                    {MessageContent}
                </Message>
            ) : (
                <div></div> //to replace 'null' value and avoid error from storybook
            )}
        </FormControl>
    ))
    .add('Form Control with CheckboxGroup and Message', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
        >
            <CheckboxGroup
                name="checkboxes"
                legend={'Checkboxes Label'}
                value={checkboxOptions[1].value}
                options={checkboxOptions}
            />

            <Message
                arrowBlock={arrowBlockOptions.topLeft}
                fieldSize={buttonSizeOptions.sm}
                blockWidth={inputWidthOptions.xs}
            >
                {MessageContent}
            </Message>
        </FormControl>
    ))
    .add('FormControl with DaTextarea', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
        >
            <DaLabel>Textarea description</DaLabel>

            <DaTextarea
                placeholder="Your text&hellip;"
                maxLength={800}
                hasCounter={true}
            />
        </FormControl>
    ));