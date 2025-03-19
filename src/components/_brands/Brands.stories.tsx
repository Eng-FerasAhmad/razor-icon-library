import { Meta, StoryObj } from '@storybook/react';

import { AppleOutline } from './apple/AppleOutline';
import { FacebookBold } from './facebook/FacebookBold';
import { YoutubeBold } from './youtube/YoutubeBold';
import { WhatsappBold } from './whatsapp/WhatsappBold';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
