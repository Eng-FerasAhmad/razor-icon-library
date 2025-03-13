import { Meta, StoryObj } from '@storybook/react';

import { CallSymbol } from './call/CallSymbol';
import { MailSymbol } from './mail/MailSymbol';
import { SmsSymbol } from './sms/SmsSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Mails',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: CallSymbol,
        name: 'CallSymbol',
    },
    {
        Component: MailSymbol,
        name: 'MailSymbol',
    },
    {
        Component: SmsSymbol,
        name: 'SmsSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
