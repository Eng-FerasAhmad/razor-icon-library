import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { ChartOutline } from './ChartOutline';
import { ChartColumnsOutline } from './ChartColumnsOutline';
import { ChartLineOutline } from './ChartLineOutline';
import { StateUpOutline } from './StateUpOutline';
import { TrendsUpOutline } from './TrendsUpOutline';

const meta: Meta = {
    title: 'Analytics',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ChartOutline,
        name: 'ChartOutline',
    },
    {
        Component: ChartColumnsOutline,
        name: 'ChartColumnsOutline',
    },
    {
        Component: ChartLineOutline,
        name: 'ChartLineOutline',
    },
    {
        Component: StateUpOutline,
        name: 'StateUpOutline',
    },
    {
        Component: TrendsUpOutline,
        name: 'TrendsUpOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
