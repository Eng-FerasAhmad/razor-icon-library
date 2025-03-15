import { Meta, StoryObj } from '@storybook/react';

import { AccountOutline } from './account/AccountOutline';
import { AddUserBold } from './add-user/AddUserBold';
import { EditUserTwotone } from './edit-user/EditUserTwotone';
import { SignupTwotone } from './signup/SignupTwotone';
import { UserTwotone } from './user/UserTwotone';
import { UsersTwotone } from './users/UsersTwotone';
import { UsersBold } from './users/UsersBold';
import { LoginTwotone } from './login/LoginTwotone';
import { LogoutOutline } from './logout/LogoutOutline';

import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
        Component: SignupTwotone,
        name: 'SignupTwotone',
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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
