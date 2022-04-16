<template>
    <v-data-table :headers="headers" :items="brands" :search="search" :items-per-page="5">
        <template #[`item.actions`]="{ item }">
            <detail-icon-button></detail-icon-button>

            <edit-icon-button></edit-icon-button>

            <remove-icon-button @click="onClickRemoveButton(item.id)"></remove-icon-button>
        </template>
    </v-data-table>
</template>
<script>
import DetailIconButton from '@/components/button/icon/DetailIconButton';
import EditIconButton from '@/components/button/icon/EditIconButton';
import RemoveIconButton from '@/components/button/icon/RemoveIconButton';

import BrandsMock from '@/mocks/BrandsMock';

export default {
    components: {
        'detail-icon-button': DetailIconButton,
        'edit-icon-button': EditIconButton,
        'remove-icon-button': RemoveIconButton
    },

    props: {
        search: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        headers: [
            {
                text: 'Nome',
                align: 'start',
                value: 'name'
            },
            { text: 'País', value: 'country' },
            {
                align: 'end',
                sortable: false,
                value: 'actions'
            }
        ],
        brands: BrandsMock
    }),

    methods: {
        onClickRemoveButton(id) {
            this.brands = this.brands.filter((brand) => brand.id != id);
        }
    }
};
</script>
