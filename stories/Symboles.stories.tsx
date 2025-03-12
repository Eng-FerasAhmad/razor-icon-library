import { Meta, StoryObj } from '@storybook/react';

import { AppleSymbol, StarSymbol } from '../src';
import { AccountSymbol } from '../src';
import { AddUserSymbol } from '../src';
import { AnalyticsSymbol } from '../src';
import { ArrowNextSymbol } from '../src';
import { ArrowPrevSymbol } from '../src';
import { CalendarSymbol } from '../src';
import { CalendarEditSymbol } from '../src';
import { CheckmarkSymbol } from '../src';
import { DashboardSymbol } from '../src';
import { HandLikeSymbol } from '../src';
import { ImageSymbol } from '../src';
import { LoginSymbol } from '../src';
import { MailSymbol } from '../src';
import { RazorSymbol } from '../src';
import { RequestsSymbol } from '../src';
import { SettingSymbol } from '../src';
import { ShopSymbol } from '../src';
import { SignupSymbol } from '../src';
import { SmsSymbol } from '../src';
import { VacationSymbol } from '../src';
import { WizardSymbol } from '../src';
import { EditUserSymbol } from '../src';
import { PaymentSymbol } from '../src';
import { ThemeSymbol } from '../src';
import { ToolbarSymbol } from '../src';
import { AwardSymbol } from '../src';
import { NotificationSymbol } from '../src';
import { QuestionSymbol } from '../src';
import { SearchSymbol } from '../src';
import { AddCircleSymbol } from '../src';
import { ArrowDownSymbol } from '../src';
import { ArrowUpSymbol } from '../src';
import { CalendarCheckSymbol } from '../src';
import { ClockSymbol } from '../src';
import { CloseSymbol } from '../src';
import { DeleteSymbol } from '../src';
import { EditSymbol } from '../src';
import { MenuSymbol } from '../src';
import { OutlineClockSymbol } from '../src';
import { TimerSymbol } from '../src';
import { UserSymbol } from '../src';
import { CallSymbol } from '../src';
import { BirthdaySymbol } from '../src';
import { LocationSymbol, BoardSymbol, UsersSymbol } from '../src';

// Define a type for components in the symbols array
type SymbolComponent = {
    Component: React.FC; // Simplified type
    name: string;
};

const meta: Meta = {
    title: 'Icons', // Category in Storybook
    tags: ['autodocs'], // Enable autodocs
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AccountSymbol,
        name: 'AccountSymbol',
    },
    {
        Component: AddCircleSymbol,
        name: 'AddCircleSymbol',
    },
    {
        Component: AddUserSymbol,
        name: 'AddUserSymbol',
    },
    {
        Component: AnalyticsSymbol,
        name: 'AnalyticsSymbol',
    },
    {
        Component: ArrowDownSymbol,
        name: 'ArrowDownSymbol',
    },
    {
        Component: AppleSymbol,
        name: 'AppleSymbol',
    },
    {
        Component: ArrowNextSymbol,
        name: 'ArrowNextSymbol',
    },
    {
        Component: ArrowPrevSymbol,
        name: 'ArrowPrevSymbol',
    },
    {
        Component: ArrowUpSymbol,
        name: 'ArrowUpSymbol',
    },
    {
        Component: CalendarCheckSymbol,
        name: 'CalendarCheckSymbol',
    },
    {
        Component: AwardSymbol,
        name: 'AwardSymbol',
    },
    {
        Component: CalendarSymbol,
        name: 'CalendarSymbol',
    },
    {
        Component: ClockSymbol,
        name: 'ClockSymbol',
    },
    {
        Component: OutlineClockSymbol,
        name: 'OutlineClockSymbol',
    },
    {
        Component: CloseSymbol,
        name: 'CloseSymbol',
    },
    {
        Component: CalendarEditSymbol,
        name: 'CalendarEditSymbol',
    },
    {
        Component: CheckmarkSymbol,
        name: 'CheckmarkSymbol',
    },
    {
        Component: DashboardSymbol,
        name: 'DashboardSymbol',
    },
    {
        Component: DeleteSymbol,
        name: 'DeleteSymbol',
    },
    {
        Component: EditSymbol,
        name: 'EditSymbol',
    },
    {
        Component: EditUserSymbol,
        name: 'EditUserSymbol',
    },
    {
        Component: HandLikeSymbol,
        name: 'HandLikeSymbol',
    },
    {
        Component: ImageSymbol,
        name: 'ImageSymbol',
    },
    {
        Component: LoginSymbol,
        name: 'LoginSymbol',
    },
    {
        Component: MailSymbol,
        name: 'MailSymbol',
    },
    {
        Component: MenuSymbol,
        name: 'MenuSymbol',
    },
    {
        Component: NotificationSymbol,
        name: 'NotificationSymbol',
    },
    {
        Component: PaymentSymbol,
        name: 'PaymentSymbol',
    },
    {
        Component: QuestionSymbol,
        name: 'QuestionSymbol',
    },
    {
        Component: RazorSymbol,
        name: 'RazorSymbol',
    },
    {
        Component: RequestsSymbol,
        name: 'RequestsSymbol',
    },
    {
        Component: SearchSymbol,
        name: 'SearchSymbol',
    },
    {
        Component: SettingSymbol,
        name: 'SettingSymbol',
    },
    {
        Component: ShopSymbol,
        name: 'ShopSymbol',
    },
    {
        Component: SignupSymbol,
        name: 'SignupSymbol',
    },
    {
        Component: SmsSymbol,
        name: 'SmsSymbol',
    },
    {
        Component: StarSymbol,
        name: 'StarSymbol',
    },
    {
        Component: TimerSymbol,
        name: 'TimerSymbol',
    },
    {
        Component: ThemeSymbol,
        name: 'ThemeSymbol',
    },
    {
        Component: ToolbarSymbol,
        name: 'ToolbarSymbol',
    },
    {
        Component: VacationSymbol,
        name: 'VacationSymbol',
    },
    {
        Component: UserSymbol,
        name: 'UserSymbol',
    },
    {
        Component: WizardSymbol,
        name: 'WizardSymbol',
    },
    {
        Component: CallSymbol,
        name: 'CallSymbol',
    },
    {
        Component: BirthdaySymbol,
        name: 'BirthdaySymbol',
    },
    {
        Component: LocationSymbol,
        name: 'LocationSymbol',
    },
    {
        Component: BoardSymbol,
        name: 'BoardSymbol',
    },
    {
        Component: UsersSymbol,
        name: 'UsersSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                padding: '16px',
                fontFamily: 'sans-serif',
                rowGap: '50px',
            }}
        >
            {symbols.map(({ Component, name }, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '130px',
                        gap: '16px',
                    }}
                >
                    <Component />
                    <span style={{ marginTop: '8px', fontSize: '12px' }}>
                        {name}
                    </span>
                </div>
            ))}
        </div>
    ),
};
