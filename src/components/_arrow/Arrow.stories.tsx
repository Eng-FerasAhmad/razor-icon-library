import { Meta, StoryObj } from '@storybook/react';

import { ArrowDownSymbol } from './arrow-down/ArrowDownSymbol';
import { ArrowPrevSymbol } from './arrow-prev/ArrowPrevSymbol';
import { ArrowNextSymbol } from './arrow-next/ArrowNextSymbol';
import { ArrowUpSymbol } from './arrow-up/ArrowUpSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Arrow',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ArrowDownSymbol,
        name: 'ArrowDownSymbol',
    },
    {
        Component: ArrowPrevSymbol,
        name: 'ArrowPrevSymbol',
    },
    {
        Component: ArrowNextSymbol,
        name: 'ArrowNextSymbol',
    },
    {
        Component: ArrowUpSymbol,
        name: 'ArrowUpSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
