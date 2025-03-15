import { Meta, StoryObj } from '@storybook/react';

import { ArchiveTickOutline } from './archive-tick/ArchiveTickOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Archive',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ArchiveTickOutline,
        name: 'ArchiveTickOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
