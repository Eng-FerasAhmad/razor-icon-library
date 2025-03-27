import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { AppleOutline } from './AppleOutline';
import { FacebookBold } from './FacebookBold';
import { YoutubeBold } from './YoutubeBold';
import { WhatsappBold } from './WhatsappBold';
import { SwaggerBold } from './SwaggerBold';
import { AzureDevopsBold } from './AzureDevopsBold';
import { DrawioBold } from './DrawioBold';
import { FigmaBold } from './FigmaBold';
import { GitHubBold } from './GitHubBold';
import { ConfluenceBold } from './ConfluenceBold';

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
    {
        Component: AzureDevopsBold,
        name: 'AzureDevopsBold',
    },
    {
        Component: DrawioBold,
        name: 'DrawioBold',
    },
    {
        Component: FigmaBold,
        name: 'FigmaBold',
    },
    {
        Component: GitHubBold,
        name: 'GitHubBold',
    },
    {
        Component: ConfluenceBold,
        name: 'ConfluenceBold',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
