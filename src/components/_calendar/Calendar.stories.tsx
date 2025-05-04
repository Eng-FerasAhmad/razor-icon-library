import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { CalendarBold } from './CalendarBold';
import { CalendarCheckTwotone } from './CalendarCheckTwotone';
import { CalendarEditTwotone } from './CalendarEditTwotone';
import { TimerBulk } from './TimerBulk';
import { ClockOutline } from './ClockOutline';
import { ClockTwotone } from './ClockTwotone';
import { TimerOutline } from './TimerOutline';

const meta: Meta = {
    title: 'Calendar',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: CalendarBold,
        name: 'CalendarBold',
    },
    {
        Component: CalendarCheckTwotone,
        name: 'CalendarCheckTwotone',
    },
    {
        Component: CalendarEditTwotone,
        name: 'CalendarEditTwotone',
    },
    {
        Component: TimerBulk,
        name: 'TimerBulk',
    },
    {
        Component: ClockOutline,
        name: 'ClockOutline',
    },
    {
        Component: ClockTwotone,
        name: 'ClockTwotone',
    },
    {
        Component: TimerOutline,
        name: 'TimerOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
