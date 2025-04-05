import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { ShopTwotone } from './ShopTwotone';
import { ShopOutline } from './ShopOutline';

const meta: Meta = {
    title: 'Shop',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ShopTwotone,
        name: 'ShopTwotone',
    },
    {
        Component: ShopOutline,
        name: 'ShopOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
