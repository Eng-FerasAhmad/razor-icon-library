import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { AppleOutline } from './AppleOutline';
import { FacebookBold } from './FacebookBold';
import { YoutubeBold } from './YoutubeBold';
import { WhatsappBold } from './WhatsappBold';
import { SwaggerBold } from './SwaggerBold';

const meta: Meta = {
    title: 'Brands',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AppleOutline,
        name: 'AppleOutline',
    },
    {
        Component: FacebookBold,
        name: 'FacebookBold',
    },
    {
        Component: YoutubeBold,
        name: 'YoutubeBold',
    },
    {
        Component: WhatsappBold,
        name: 'WhatsappBold',
    },
    {
        Component: SwaggerBold,
        name: 'SwaggerBold',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
