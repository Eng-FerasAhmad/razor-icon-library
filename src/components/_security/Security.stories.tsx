import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { VerifyOutline } from './VerifyOutline';
import { SecuritySafeOutline } from './SecuritySafeOutline';

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
    {
        Component: VerifyOutline,
        name: 'VerifyOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
