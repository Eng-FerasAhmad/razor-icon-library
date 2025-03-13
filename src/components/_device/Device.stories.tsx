import { Meta, StoryObj } from '@storybook/react';

import { MicroscopeSymbol } from './microscope/MicroscopeSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Device',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: MicroscopeSymbol,
        name: 'MicroscopeSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
