import { Meta, StoryObj } from '@storybook/react';

import { SecuritySafe } from './security-safe/SecuritySafe';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Security',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: SecuritySafe,
        name: 'SecuritySafe',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
