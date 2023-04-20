<template>
  <tv-demo hideBackground :component="component" :variants="demos" />
</template>

<script>
import { shallowRef } from "vue";
import TvCard from "@/component/TvCard.vue";
import TvDemo from "todovue-demo";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoCard",
  setup() {
    const component = shallowRef(TvCard);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
};
</script>

<style></style>
