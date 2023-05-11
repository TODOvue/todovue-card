<template>
  <div class="tv-card-body" v-if="card">
    <div class="tv-card" :style="card.customStyleCard">
      <div class="tv-card-image">
        <img :src="card.image" :alt="card.alt" />
      </div>
      <div class="tv-card-content">
        <div class="tv-card-title" :style="card.customStyleCard">
          {{ card.title }}
        </div>
        <div class="tv-card-label" v-if="card.labels">
          <tv-label
            v-for="label in card.labels.slice(0, card.limitLabels)"
            :key="label.id"
            :color="label.color"
            @click="clickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
        <div class="tv-card-description" :class="{ 'tv-pt-0': !card.labels }">
          {{ card.description }}
        </div>
      </div>
      <div class="tv-card-action">
        <div class="tv-card-button">
          <tv-button
            @cliclButton="clickButton"
            isRounded
            :class="{ 'tv-btn-small': card.secondaryButtonText }"
            :customStyle="card.customStyleButton"
          >
            {{ card.primaryButtonText }}
          </tv-button>
          <tv-button
            @cliclButton="clickButton"
            isRounded
            v-if="card.secondaryButtonText"
            isInfo
            isSmall
            :customStyle="card.customStyleButtonSecondary"
          >
            {{ card.secondaryButtonText }}
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
import TvLabel from "todovue-label";
import { computed } from "vue";
export default {
  name: "TvCard",
  components: {
    TvButton,
    TvLabel,
  },
  props: {
    configCard: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const clickButton = () => {
      emit("clickButton");
    };

    const clickLabel = (label) => {
      emit("clickLabel", label);
    };

    const card = computed(() => {
      const { configCard } = props;
      if (!configCard) return null;
      return {
        image: configCard.image,
        alt: configCard.alt,
        description: configCard.description,
        title: configCard.title,
        primaryButtonText: configCard.primaryButtonText,
        secondaryButtonText: configCard.secondaryButtonText || null,
        labels: configCard.labels || null,
        limitLabels: configCard.limitLabels || 3,
        customStyleCard:
          {
            backgroundColor: configCard.backgroundColor || null,
            color: configCard.color || null,
          } || null,
        customStyleButton:
          {
            backgroundColor: configCard.backgroundButtonColor || null,
            color: configCard.colorButton || null,
          } || null,
        customStyleButtonSecondary:
          {
            backgroundColor: configCard.backgroundButtonSecondaryColor || null,
            color: configCard.colorButtonSecondary || null,
          } || null,
      };
    });

    return {
      clickButton,
      clickLabel,
      card,
    };
  },
  emits: ["clickButton", "clickLabel"],
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
