<template>
    <span>Carros</span>
</template>
<script>
import { GlobalTitleHandler } from '@/store/modules/globalTitle';

export default {
    created() {
        GlobalTitleHandler.set(this, 'Locacar - Carros');
    }
};
</script>
