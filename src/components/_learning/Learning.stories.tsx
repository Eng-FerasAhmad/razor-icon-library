import { Meta, StoryObj } from '@storybook/react';

import { TeacherOutline } from './teacher/TeacherOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Learning',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: TeacherOutline,
        name: 'TeacherOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
