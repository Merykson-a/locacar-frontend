<template>
    <v-btn text icon @click.stop="$emit('click')">
        <v-icon :size="size" :color="color" aria-label="Detalhes" aria-hidden="false" role="img"
            >mdi-eye-circle-outline</v-icon
        >
    </v-btn>
</template>

<script>
export default {
    name: 'details-icon-button',
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
