<template>
    <v-card tag="section" :id="title" tile elevation="0" class="result-card">
        <h2 class="result-card__title">{{ title }}</h2>

        <slot />
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResultCard extends Vue {
    @Prop({ type: String, required: true })
    title: string
}
</script>

<style lang="scss" scoped>
.result-card {
    padding: 3rem 2rem;

    &__title {
        margin-bottom: 1rem;

        font-size: 2.5em;
        font-weight: 800;
        line-height: 1.25;
    }
}
</style>