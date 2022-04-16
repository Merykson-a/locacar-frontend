<template>
    <v-btn text icon @click.stop="$emit('click')">
        <v-icon :size="size" :color="color" aria-label="Excluir" aria-hidden="false" role="img"
            >mdi-delete-circle-outline</v-icon
        >
    </v-btn>
</template>

<script>
export default {
    name: 'remove-icon-button',
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
