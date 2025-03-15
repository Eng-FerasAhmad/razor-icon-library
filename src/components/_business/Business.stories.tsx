import { Meta, StoryObj } from '@storybook/react';

import { VisaCardOutline } from './visa-card/VisaCardOutline';
import { VisaCardTwotone } from './visa-card/VisaCardTwotone';
import { RequestsBold } from './requests/RequestsBold';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
