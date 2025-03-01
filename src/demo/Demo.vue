<script setup>
import TvDemo from '@todovue/tvdemo';
import { defineAsyncComponent } from 'vue';

const TvCard = defineAsyncComponent(() => import('../components/TvCard.vue'));
import { demos } from "../utils/mocks.js";
</script>

<template>
  <tv-demo
    :component="TvCard"
    :variants="demos"
    hide-background
    name-component="TvCard"
    npm-install="@todovue/tvcard"
    source-link="https://github.com/TODOvue/todovue-card"
    url-clone="https://github.com/TODOvue/todovue-card.git"
    version="1.0.0"
  />
</template>
