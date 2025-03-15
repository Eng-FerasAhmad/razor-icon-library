import { Meta, StoryObj } from '@storybook/react';

import { AddCircleOutline } from './add-circle/AddCircleOutline';
import { CloseOutline } from './close/CloseOutline';
import { DeleteOutline } from './delete/DeleteOutline';
import { EditOutline } from './edit/EditOutline';
import { SearchOutline } from './search/SearchOutline';

import { GalleryTwotone } from 'components/_files/gallery-twotone/GalleryTwotone';
import { GalleryBold } from 'components/_files/gallery-bold/GalleryBold';
import { GalleryOutline } from 'components/_files/gallery-outline/GalleryOutline';
import StoryTemplate, { SymbolComponent } from 'components/StoryTemplate';

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
];

export const AllIcons: StoryObj = {
    render: () => <StoryTemplate symbols={symbols} />,
};
