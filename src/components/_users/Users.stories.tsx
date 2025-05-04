import { Meta, StoryObj } from '@storybook/react';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { AccountOutline } from './AccountOutline';
import { AddUserBold } from './AddUserBold';
import { EditUserTwotone } from './EditUserTwotone';
import { UserTwotone } from './UserTwotone';
import { UsersTwotone } from './UsersTwotone';
import { UsersBold } from './UsersBold';
import { LoginTwotone } from './LoginTwotone';
import { LogoutOutline } from './LogoutOutline';
import { BirthdayOutline } from './BirthdayOutline';
import { UserCardOutline } from './UserCardOutline';
import { UserOutline } from './UserOutline';

const meta: Meta = {
    title: 'Users',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AccountOutline,
        name: 'AccountOutline',
    },
    {
        Component: AddUserBold,
        name: 'AddUserBold',
    },
    {
        Component: EditUserTwotone,
        name: 'EditUserTwotone',
    },
    {
        Component: UserTwotone,
        name: 'UserTwotone',
    },
    {
        Component: UsersTwotone,
        name: 'UsersTwotone',
    },
    {
        Component: UsersBold,
        name: 'UsersBold',
    },
    {
        Component: LoginTwotone,
        name: 'LoginTwotone',
    },
    {
        Component: LogoutOutline,
        name: 'LogoutOutline',
    },
    {
        Component: BirthdayOutline,
        name: 'BirthdayOutline',
    },
    {
        Component: UserCardOutline,
        name: 'UserCardOutline',
    },
    {
        Component: UserOutline,
        name: 'UserOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
