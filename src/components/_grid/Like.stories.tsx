import { Meta, StoryObj } from '@storybook/react';

import { DashboardSymbol } from './dashboard/DashboardSymbol';

import { BoardOutline } from 'components/_grid/board/BoardOutline';
import { BoardBold } from 'components/_grid/board/BoardBold';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Grid',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: BoardOutline,
        name: 'BoardOutline',
    },
    {
        Component: BoardBold,
        name: 'BoardBold',
    },
    {
        Component: DashboardSymbol,
        name: 'DashboardSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
