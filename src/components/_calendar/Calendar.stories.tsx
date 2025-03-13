import { Meta, StoryObj } from '@storybook/react';

import { CalendarSymbol } from './calendar/CalendarSymbol';
import { CalendarCheckSymbol } from './calendar-check/CalendarCheck';
import { CalendarEditSymbol } from './calendar-edit/CalendarEditSymbol';
import { TimerSymbol } from './timer/TimerSymbol';
import { ClockSymbol } from './clock/ClockSymbol';
import { OutlineClockSymbol } from './clock-outline/OutlineClockSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Calendar',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: CalendarSymbol,
        name: 'CalendarSymbol',
    },
    {
        Component: CalendarCheckSymbol,
        name: 'CalendarCheckSymbol',
    },
    {
        Component: CalendarEditSymbol,
        name: 'CalendarEditSymbol',
    },
    {
        Component: TimerSymbol,
        name: 'TimerSymbol',
    },
    {
        Component: ClockSymbol,
        name: 'ClockSymbol',
    },
    {
        Component: OutlineClockSymbol,
        name: 'OutlineClockSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
