import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { AwardTwotone } from './AwardTwotone';
import { CheckmarkBold } from './CheckmarkBold';
import { HandLikeTwotone } from './HandLikeTwotone';
import { StarBold } from './StarBold';
import { StarOutline } from './StarOutline';

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
    {
        Component: StarOutline,
        name: 'StarOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
