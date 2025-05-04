import { Meta, StoryObj } from '@storybook/react';

import { GalleryOutline } from 'components/_files/GalleryOutline';
import { GalleryTwotone } from 'components/_files/GalleryTwotone';
import { GalleryBold } from 'components/_files/GalleryBold';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';
import { FilterCancelOutline } from 'components/_files/FilterCancelOutline';
import { FilterEditOutline } from 'components/_files/FilterEditOutline';
import { FilterSearchOutline } from 'components/_files/FilterSearchOutline';

import { AddCircleOutline } from './AddCircleOutline';
import { CloseOutline } from './CloseOutline';
import { DeleteOutline } from './DeleteOutline';
import { EditTwotone } from './EditTwotone';
import { SearchOutline } from './SearchOutline';
import { CheckListOutline } from './CheckListOutline';
import { SortOutline } from './SortOutline';
import { AddOutline } from './AddOutline';
import { NotesOutline } from './NotesOutline';
import { EditOutline } from './EditOutline';

const meta: Meta = {
    title: 'File',
    tags: ['autodocs'],
};

export default meta;

// Define all symbols with their respective props
const symbols: SymbolComponent[] = [
    {
        Component: AddCircleOutline,
        name: 'AddCircleOutline',
    },
    {
        Component: CloseOutline,
        name: 'CloseOutline',
    },
    {
        Component: DeleteOutline,
        name: 'DeleteOutline',
    },
    {
        Component: EditTwotone,
        name: 'EditTwotone',
    },
    {
        Component: GalleryTwotone,
        name: 'GalleryTwotone',
    },
    {
        Component: GalleryBold,
        name: 'GalleryBold',
    },
    {
        Component: GalleryOutline,
        name: 'GalleryOutline',
    },
    {
        Component: SearchOutline,
        name: 'SearchOutline',
    },
    {
        Component: CheckListOutline,
        name: 'CheckListOutline',
    },
    {
        Component: FilterCancelOutline,
        name: 'FilterCancelOutline',
    },
    {
        Component: FilterEditOutline,
        name: 'FilterEditOutline',
    },
    {
        Component: FilterSearchOutline,
        name: 'FilterSearchOutline',
    },
    {
        Component: SortOutline,
        name: 'SortOutline',
    },
    {
        Component: AddOutline,
        name: 'AddOutline',
    },
    {
        Component: NotesOutline,
        name: 'NotesOutline',
    },
    {
        Component: EditOutline,
        name: 'EditOutline',
    },
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
