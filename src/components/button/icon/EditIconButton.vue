<template>
    <v-btn text icon @click.stop="$emit('click')">
        <v-icon :size="size" :color="color" aria-label="Editar" aria-hidden="false" role="img"
            >mdi-pencil-circle-outline</v-icon
        >
    </v-btn>
</template>

<script>
export default {
    name: 'edit-icon-button',
    props: {
        color: {
            type: String
        },

        size: {
            type: String,
            default: '25'
        }
    }
};
</script>
