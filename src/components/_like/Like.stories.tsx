import { Meta, StoryObj } from '@storybook/react';

import { AwardSymbol } from './award/AwardSymbol';
import { CheckmarkSymbol } from './checkmark/CheckmarkSymbol';
import { HandLikeSymbol } from './hand-like/HandLikeSymbol';
import { StarSymbol } from './star/StarSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Like',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AwardSymbol,
        name: 'AwardSymbol',
    },
    {
        Component: CheckmarkSymbol,
        name: 'CheckmarkSymbol',
    },
    {
        Component: HandLikeSymbol,
        name: 'HandLikeSymbol',
    },
    {
        Component: StarSymbol,
        name: 'StarSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
