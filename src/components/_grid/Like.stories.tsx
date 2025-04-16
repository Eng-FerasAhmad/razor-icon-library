import { Meta, StoryObj } from '@storybook/react';

import { BoardOutline } from 'components/_grid/BoardOutline';
import { BoardBold } from 'components/_grid/BoardBold';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';
import { TableTwotone } from 'components/_grid/TableTwotone';
import { CubeOutline } from 'components/_grid/CubeOutline';
import { DiscoverOutline } from 'components/_grid/DiscoverOutline';
import { TriangleOutline } from 'components/_grid/TriangleOutline';

import { DashboardTwotone } from './DashboardTwotone';

const meta: Meta = {
    title: 'Grid',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: CubeOutline,
        name: 'CubeOutline',
    },
    {
        Component: DiscoverOutline,
        name: 'DiscoverOutline',
    },
    {
        Component: TriangleOutline,
        name: 'TriangleOutline',
    },
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
    {
        Component: TableTwotone,
        name: 'TableTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
