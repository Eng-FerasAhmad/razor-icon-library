import { Meta, StoryObj } from '@storybook/react';

import { ArrowDownOutline } from './arrow-down/ArrowDownOutline';
import { ArrowPrevOutline } from './arrow-prev/ArrowPrevOutline';
import { ArrowNextOutline } from './arrow-next/ArrowNextOutline';
import { ArrowUpOutline } from './arrow-up/ArrowUpOutline';
import { ArrowBackOutline } from './arrow-back/ArrowBackOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Arrow',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: ArrowDownOutline,
        name: 'ArrowDownOutline',
    },
    {
        Component: ArrowPrevOutline,
        name: 'ArrowPrevOutline',
    },
    {
        Component: ArrowNextOutline,
        name: 'ArrowNextOutline',
    },
    {
        Component: ArrowUpOutline,
        name: 'ArrowUpOutline',
    },
    {
        Component: ArrowBackOutline,
        name: 'ArrowBackOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
