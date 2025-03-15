import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { RazorLogoTwotone } from './RazorLogoTwotone';

const meta: Meta = {
    title: 'Razor',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: RazorLogoTwotone,
        name: 'RazorLogoTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
