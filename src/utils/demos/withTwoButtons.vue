<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const TvCard = defineAsyncComponent(() => import('../../components/TvCard.vue'));

const configCard = ref({
  title: 'Design Web',
  description: 'Web design encompasses many different skills...',
  primaryButtonText: 'View code',
  secondaryButtonText: 'View blog',
  image: 'https://todovue.com/web-design.webp',
  labels: [
    {
      id: 1,
      name: 'JavaScript',
      color: '#F7DF1E',
    },
    {
      id: 2,
      name: 'HTML',
      color: '#E34F26',
    },
    {
      id: 3,
      name: 'CSS',
      color: '#1572B6',
    }
  ],
});

const handleLabel = (label) => {
  console.log(label);
};

const handleButton = () => {
  console.log('Button clicked');
};

const handleSecondaryButton = () => {
  console.log('Secondary button clicked');
};
</script>
