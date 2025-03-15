import { Meta, StoryObj } from '@storybook/react';

import { SettingsOutline } from 'components/_settings/settings/SettingsOutline';
import { SettingsBold } from 'components/_settings/settings/SettingsBold';
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
