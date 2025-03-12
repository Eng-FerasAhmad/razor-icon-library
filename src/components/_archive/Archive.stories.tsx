import { Meta, StoryObj } from '@storybook/react';

import { ArchiveTick } from './archive-tick/ArchiveTick';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Archive',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ArchiveTick,
        name: 'ArchiveTick',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
