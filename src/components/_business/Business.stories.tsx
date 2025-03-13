import { Meta, StoryObj } from '@storybook/react';

import { PaymentSymbol } from './payment/PaymentSymbol';
import { RequestsSymbol } from './requests/RequestsSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Business',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: PaymentSymbol,
        name: 'PaymentSymbol',
    },
    {
        Component: RequestsSymbol,
        name: 'RequestsSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
