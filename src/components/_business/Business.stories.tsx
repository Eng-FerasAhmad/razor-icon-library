import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { VisaCardOutline } from './VisaCardOutline';
import { VisaCardTwotone } from './VisaCardTwotone';
import { RequestsBold } from './RequestsBold';
import { RequestsOutline } from './RequestsOutline';

const meta: Meta = {
    title: 'Business',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: VisaCardTwotone,
        name: 'VisaCardTwotone',
    },
    {
        Component: VisaCardOutline,
        name: 'VisaCardOutline',
    },
    {
        Component: RequestsBold,
        name: 'RequestsBold',
    },
    {
        Component: RequestsOutline,
        name: 'RequestsOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
