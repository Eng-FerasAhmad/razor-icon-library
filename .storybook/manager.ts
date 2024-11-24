import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
    base: 'dark',
    brandTitle: 'Razor Shared Library',
    brandUrl: 'https://github.com/Eng-FerasAhmad/razor-icon-library',
    brandImage: './logo.svg',
    colorPrimary: '#FF9933',
    colorSecondary: '#FF9933',
    appBg: '#333',
    appContentBg: '#1c1c1c',
    barBg: '#1c1c1c',
    barTextColor: '#ffffff',
    barSelectedColor: '#FF9933',
});

addons.setConfig({
    theme: theme,
});
