import { Meta, StoryObj } from '@storybook/react';

import { MenuOutline } from './menu/MenuOutline';
import { AnalyticsTwotone } from './analytics/AnalyticsTwotone';
import { BurgerOutline } from './burger/Burger';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
