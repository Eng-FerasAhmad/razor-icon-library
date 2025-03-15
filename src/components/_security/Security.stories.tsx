import { Meta, StoryObj } from '@storybook/react';

import { SecuritySafeOutline } from './security-safe/SecuritySafeOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Security',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: SecuritySafeOutline,
        name: 'SecuritySafeOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
