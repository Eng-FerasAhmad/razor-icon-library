import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';
import { SmsTwotone } from 'components/_mails/SmsTwotone';

import { CallOutline } from './CallOutline';
import { MailTwotone } from './MailTwotone';
import { MailSendingTwotone } from './MailSendingTwotone';
import { SendOutline } from './SendOutline';
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
    {
        Component: MailSendingTwotone,
        name: 'MailSendingTwotone',
    },
    {
        Component: SendOutline,
        name: 'SendOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
