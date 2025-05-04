import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { MenuOutline } from './MenuOutline';
import { AnalyticsTwotone } from './AnalyticsTwotone';
import { BurgerOutline } from './Burger';
import { CoffeeOutline } from './CoffeeOutline';

const meta: Meta = {
    title: 'Essential',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: MenuOutline,
        name: 'MenuOutline',
    },
    {
        Component: AnalyticsTwotone,
        name: 'AnalyticsTwotone',
    },
    {
        Component: BurgerOutline,
        name: 'BurgerOutline',
    },
    {
        Component: CoffeeOutline,
        name: 'CoffeeOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
