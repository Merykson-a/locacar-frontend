<template>
    <v-card class="elevation-5">
        <v-card-title class="d-flex justify-space-between align-center">
            <v-btn style="max-width: 30%" color="blue" dark>Nova marca</v-btn>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                style="max-width: 30%"
            ></v-text-field>
        </v-card-title>

        <brands-table :search="search"></brands-table>
    </v-card>
</template>

<script>
import BrandsTable from './components/BrandsTable.vue';
import { GlobalTitleHandler } from '@/store/modules/globalTitle';

export default {
    components: {
        'brands-table': BrandsTable
    },

    data: () => ({
        search: ''
    }),

    created() {
        GlobalTitleHandler.set(this, 'Locacar - Marcas');
    }
};
</script>
