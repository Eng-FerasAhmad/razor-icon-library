import { Meta, StoryObj } from '@storybook/react';

import { MenuSymbol } from './menu/MenuSymbol';
import { AnalyticsSymbol } from './analytics/AnalyticsSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Essential',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: MenuSymbol,
        name: 'MenuSymbol',
    },
    {
        Component: AnalyticsSymbol,
        name: 'AnalyticsSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
