import { Meta, StoryObj } from '@storybook/react';

import { CalendarBold } from './calendar/CalendarBold';
import { CalendarCheckTwotone } from './calendar-check/CalendarCheckTwotone';
import { CalendarEditTwotone } from './calendar-edit/CalendarEditTwotone';
import { TimerBulk } from './timer/TimerBulk';
import { ClockOutline } from './clock/ClockOutline';
import { ClockTwotone } from './clock/ClockTwotone';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
