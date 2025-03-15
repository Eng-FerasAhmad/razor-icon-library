import { Meta, StoryObj } from '@storybook/react';

import { DashboardTwotone } from './dashboard/DashboardTwotone';

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
        Component: DashboardTwotone,
        name: 'DashboardTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
