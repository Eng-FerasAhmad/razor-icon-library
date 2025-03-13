import { Meta, StoryObj } from '@storybook/react';

import { AccountSymbol } from './account/AccountSymbol';
import { AddUserSymbol } from './add-user/AddUserSymbol';
import { EditUserSymbol } from './edit-user/EditUser';
import { SignupSymbol } from './signup/SignupSymbol';
import { UserSymbol } from './user/UserSymbol';
import { UsersSymbol } from './users/UsersSymbol';
import { LoginSymbol } from './login/LoginSymbol';
import { LogoutSymbol } from './logout/LogoutSymbol';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

const meta: Meta = {
    title: 'Users',
    tags: ['autodocs'],
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
        Component: EditUserSymbol,
        name: 'EditUserSymbol',
    },
    {
        Component: SignupSymbol,
        name: 'SignupSymbol',
    },
    {
        Component: UserSymbol,
        name: 'UserSymbol',
    },
    {
        Component: UsersSymbol,
        name: 'UsersSymbol',
    },
    {
        Component: LoginSymbol,
        name: 'LoginSymbol',
    },
    {
        Component: LogoutSymbol,
        name: 'LogoutSymbol',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
