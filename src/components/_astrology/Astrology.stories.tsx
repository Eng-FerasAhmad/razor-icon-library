import { Meta, StoryObj } from '@storybook/react';

import { VuesaxSymbol } from './vuesax/VuesaxSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Astrology',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: VuesaxSymbol,
        name: 'VuesaxSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
