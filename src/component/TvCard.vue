<template>
  <div class="tv-card-body">
    <div class="tv-card">
      <div class="tv-card-image">
        <img :src="image" :alt="alt" />
      </div>
      <div class="tv-card-content">
        <div class="tv-card-title">
          <slot v-if="!title" name="title"></slot>
          <template v-else>
            {{ title }}
          </template>
        </div>
        <div class="tv-card-label" v-if="labels">
          <tv-label
            v-for="label in labels.slice(0, limitLabels)"
            :key="label.id"
            :color="label.color"
            @click="clickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
        <div class="tv-card-description">
          <slot v-if="!description" name="description"></slot>
          <template v-else>
            {{ description }}
          </template>
        </div>
      </div>
      <div class="tv-card-action">
        <div class="tv-card-button">
          <tv-button @click="clickButton" isRounded>
            <slot v-if="!textButton" name="textButton"></slot>
            <template v-else>
              {{ textButton }}
            </template>
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
import TvLabel from "todovue-label";
export default {
  name: "TvCard",
  components: {
    TvButton,
    TvLabel,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      default: null,
    },
    limitLabels: {
      type: Number,
      default: 3,
    },
    description: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    textButton: {
      type: String,
      default: null,
    },
  },
  setup(_, { emit }) {
    const clickButton = () => {
      emit("clickButton");
    };

    const clickLabel = (label) => {
      emit("clickLabel", label);
    };

    return {
      clickButton,
      clickLabel,
    };
  },
  emits: ["clickButton", "clickLabel"],
};
</script>

<style></style>
