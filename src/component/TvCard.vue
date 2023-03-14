<template>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <img :src="image" :alt="title" />
      </div>
      <div class="card-content">
        <div class="card-content_title">
          <slot name="title"></slot>
        </div>
        <div class="card-content_label" v-if="labels">
          <tv-label
            v-for="label in labels"
            :key="label.id"
            :color="label.color"
            @click="clickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
        <div class="card-content_description">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="card-action">
        <div class="card-action_button">
          <tv-button @click="clickButton" is-rounded is-small>
            <slot name="textButton"></slot>
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
    title: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
    },
  },
  methods: {
    clickButton() {
      this.$emit("clickButton");
    },
    clickLabel(label) {
      this.$emit("clickLabel", label);
    },
  },
};
</script>

<style scoped>
.dark-mode .card {
  background: var(--color-background-card-dark);
  color: var(--color-text-dark);
}

.dark-mode .card-content_title {
  background: var(--color-background-card-dark);
}

.light-mode .card {
  background: var(--color-background-card-light);
  color: var(--color-text-light);
}

.light-mode .card-content_title {
  background: var(--color-background-card-light);
}

.container {
  max-width: 350px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.container .card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 0 0 20px 20px;
  padding-top: 170px;
  position: relative;
}

.container .card .card-image {
  height: 200px;
  overflow: hidden;
  position: absolute;
  top: -30px;
}

.container .card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0 10px;
  border-radius: 20px 20px 0 0;
}

.container .card .card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 30px;
}

.container .card .card-content .card-content_title {
  font-weight: 600;
  text-transform: uppercase;
  width: 80%;
  text-align: center;
  position: absolute;
  top: -50px;
  border-radius: 20px 20px 0 0;
  padding: 10px 0;
}

.container .card .card-content .card-content_label {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: center;
}

.container .card .card-content .card-content_description {
  font-size: 12px;
  text-align: center;
  padding: 15px;
  letter-spacing: 1px;
  font-weight: 300;
  margin-bottom: 20px;
}

.container .card .card-action {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 20px;
}

.container .card .card-action .card-action_button {
  position: absolute;
}
</style>
