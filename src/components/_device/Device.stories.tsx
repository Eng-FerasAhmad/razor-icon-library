import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';
import { WifiOutline } from 'components/_device/WifiOutline';
import { HomeWifiOutline } from 'components/_device/HomeWifiOutline';

import { MicroscopeOutline } from './MicroscopeOutline';

const meta: Meta = {
    title: 'Device',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: MicroscopeOutline,
        name: 'MicroscopeOutline',
    },
    {
        Component: WifiOutline,
        name: 'WifiOutline',
    },
    {
        Component: HomeWifiOutline,
        name: 'HomeWifiOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
