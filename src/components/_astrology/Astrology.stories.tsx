import { Meta, StoryObj } from '@storybook/react';

import { VuesaxOutline } from './vuesax/VuesaxOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Astrology',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: VuesaxOutline,
        name: 'VuesaxOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
