<template>
    <v-app dark>
        <template>
            <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
                <!-- ="{ item }" -->
                <template #[`item.actions`]>
                    <detail-icon-button></detail-icon-button>
                    <edit-icon-button></edit-icon-button>
                    <remove-icon-button></remove-icon-button>
                </template>
            </v-data-table>
        </template>
    </v-app>
</template>
<script>
import DetailIconButton from '@/components/button/icon/DetailIconButton';
import EditIconButton from '@/components/button/icon/EditIconButton';
import RemoveIconButton from '@/components/button/icon/RemoveIconButton';

export default {
    components: {
        'detail-icon-button': DetailIconButton,
        'edit-icon-button': EditIconButton,
        'remove-icon-button': RemoveIconButton
    },

    data: () => ({
        headers: [
            {
                text: 'Nome',
                align: 'start',
                value: 'name'
            },
            { text: 'Fabricante', value: 'manufacturer' },
            {
                align: 'end',
                sortable: false,
                value: 'actions'
            }
        ],
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
            }
        ]
    })
};
</script>
