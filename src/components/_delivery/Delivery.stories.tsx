import { Meta, StoryObj } from '@storybook/react';

import { WizardSymbol } from './wizard/WizardSymbol';
import { ToolbarSymbol } from './toolbar/ToolbarSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Delivery',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: WizardSymbol,
        name: 'WizardSymbol',
    },
    {
        Component: ToolbarSymbol,
        name: 'ToolbarSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
