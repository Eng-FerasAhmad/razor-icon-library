import { Meta, StoryObj } from '@storybook/react';

import { AddCircleOutline } from './add-circle/AddCircleOutline';
import { CloseOutline } from './close/CloseOutline';
import { DeleteOutline } from './delete/DeleteOutline';
import { EditOutline } from './edit/EditOutline';
import { SearchOutline } from './search/SearchOutline';

import { GalleryOutline } from 'components/_files/gallery/GalleryOutline';
import { GalleryTwotone } from 'components/_files/gallery/GalleryTwotone';
import { GalleryBold } from 'components/_files/gallery/GalleryBold';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

import { CheckListOutline } from './CheckListOutline';

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
        Component: EditOutline,
        name: 'EditOutline',
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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
