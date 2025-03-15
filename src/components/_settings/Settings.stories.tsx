import { Meta, StoryObj } from '@storybook/react';

import { SettingsBold } from 'components/_settings/settings-bold/SettingsBold';
import { SettingsOutline } from 'components/_settings/settings-outline/SettingsOutline';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Settings',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: SettingsBold,
        name: 'SettingsBold',
    },
    {
        Component: SettingsOutline,
        name: 'SettingsOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
