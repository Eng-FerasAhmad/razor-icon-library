import { Meta, StoryObj } from '@storybook/react';

import { WizardTwotone } from './wizard/WizardTwotone';
import { ToolbarTwotone } from './toolbar/ToolbarTwotone';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Delivery',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: WizardTwotone,
        name: 'WizardTwotone',
    },
    {
        Component: ToolbarTwotone,
        name: 'ToolbarTwotone',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
