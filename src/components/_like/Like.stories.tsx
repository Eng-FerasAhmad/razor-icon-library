import { Meta, StoryObj } from '@storybook/react';

import { AwardTwotone } from './award/AwardTwotone';
import { CheckmarkBold } from './checkmark/CheckmarkBold';
import { HandLikeTwotone } from './hand-like/HandLikeTwotone';
import { StarBold } from './star/StarBold';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Like',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AwardTwotone,
        name: 'AwardTwotone',
    },
    {
        Component: CheckmarkBold,
        name: 'CheckmarkBold',
    },
    {
        Component: HandLikeTwotone,
        name: 'HandLikeTwotone',
    },
    {
        Component: StarBold,
        name: 'StarBold',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
