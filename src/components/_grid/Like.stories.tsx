import { Meta, StoryObj } from '@storybook/react';

import { BoardSymbol } from './board/BoardSymbol';
import { DashboardSymbol } from './dashboard/DashboardSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Grid',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: BoardSymbol,
        name: 'BoardSymbol',
    },
    {
        Component: DashboardSymbol,
        name: 'DashboardSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
