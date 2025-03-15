import { Meta, StoryObj } from '@storybook/react';

import { CallOutline } from './call/CallOutline';
import { MailTwotone } from './mail/MailTwotone';
import { SmsTwotone } from './sms/SmsTwotone';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Mails',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: CallOutline,
        name: 'CallOutline',
    },
    {
        Component: MailTwotone,
        name: 'MailTwotone',
    },
    {
        Component: SmsTwotone,
        name: 'SmsTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
