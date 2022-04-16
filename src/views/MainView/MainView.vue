<template>
    <v-app dark>
        <v-navigation-drawer v-model="isDrawer" :mini-variant="isMiniVariant" fixed app>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar fixed app>
            <v-app-bar-nav-icon @click.stop="isDrawer = !isDrawer" />

            <v-btn v-if="isDrawer" icon @click.stop="isMiniVariant = !isMiniVariant">
                <v-icon>mdi-{{ `chevron-${isMiniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>

            <v-toolbar-title v-text="title" />
            <v-spacer />

            <v-switch label="Modo noturno" :value="true" @change="onChangeTheme()" hide-details></v-switch>
        </v-app-bar>

        <v-main>
            <v-container class="ma-5">
                <router-view />
            </v-container>
        </v-main>

        <v-footer app class="d-flex justify-center">
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
import RoutePath from '@/router/RoutePath';

export default {
    data: () => ({
        isDrawer: true,
        items: [
            {
                icon: 'mdi-chart-bar',
                title: 'Dashboard',
                to: RoutePath.DASHBOARD
            },

            {
                icon: 'mdi-account-outline',
                title: 'Clientes',
                to: RoutePath.CLIENTS
            },

            {
                icon: 'mdi-car-outline',
                title: 'Carros',
                to: RoutePath.CARS
            },

            {
                icon: 'mdi-tag-outline',
                title: 'Marcas',
                to: RoutePath.BRANDS
            },

            {
                icon: 'mdi-clock-time-four-outline',
                title: 'Aluguéis',
                to: RoutePath.RENTS
            }
        ],
        isMiniVariant: false,
        title: 'Locacar'
    }),

    methods: {
        onChangeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>
