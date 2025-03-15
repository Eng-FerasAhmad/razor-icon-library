import { Meta, StoryObj } from '@storybook/react';

import { ThemeTwotone } from './theme/ThemeTwotone';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Design',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ThemeTwotone,
        name: 'ThemeTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
