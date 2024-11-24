import { Meta, StoryObj } from '@storybook/react';

import { AppleSymbol } from 'components/apple/AppleSymbol';
import { AccountSymbol } from 'components/account/AccountSymbol';
import { AddUserSymbol } from 'components/add-user/AddUserSymbol';
import { AnalyticsSymbol } from 'components/analytics/AnalyticsSymbol';
import { ArrowNextSymbol } from 'components/arrow-next/ArrowNextSymbol';
import { ArrowPrevSymbol } from 'components/arrow-prev/ArrowPrevSymbol';
import { CalendarSymbole } from 'components/calendar/CalendarSymbole';
import { CalendarEditSymbol } from 'components/calendar-edit/CalendarEditSymbol';
import { CheckmarkSymbol } from 'components/checkmark/CheckmarkSymbol';
import { DashboardSymbol } from 'components/dashboard/DashboardSymbol';
import { EditIconSymbol } from 'components/edit/EditIconSymbol';
import { HandLikeSymbol } from 'components/hand-like/HandLikeSymbol';
import { ImageSymbol } from 'components/image/ImageSymbol';
import { LoginSymbol } from 'components/login/LoginSymbol';
import { MailSymbol } from 'components/mail/MailSymbol';
import { RazorSymbol } from 'components/razor-logo/RazorSymbol';
import { RequestsSymbol } from 'components/requests/RequestsSymbol';
import { SettingSymbol } from 'components/setting/SettingSymbol';
import { ShopSymbol } from 'components/shop/ShopSymbol';
import { SignupSymbol } from 'components/signup/SignupSymbol';
import { SmsSymbol } from 'components/sms/SmsSymbol';
import { StarSymbol } from 'components/star/StarSymbole';
import { VacationSymbol } from 'components/vacation/VacationSymbol';
import { WizardSymbol } from 'components/wizard/WizardSymbol';

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
        Component: AddUserSymbol,
        name: 'AddUserSymbol',
    },
    {
        Component: AnalyticsSymbol,
        name: 'AnalyticsSymbol',
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
        Component: CalendarSymbole,
        name: 'CalendarSymbole',
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
        Component: EditIconSymbol,
        name: 'EditIconSymbol',
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
        Component: RazorSymbol,
        name: 'RazorSymbol',
    },
    {
        Component: RequestsSymbol,
        name: 'RequestsSymbol',
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
        Component: VacationSymbol,
        name: 'VacationSymbol',
    },
    {
        Component: WizardSymbol,
        name: 'WizardSymbol',
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
                        width: '100px',
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
