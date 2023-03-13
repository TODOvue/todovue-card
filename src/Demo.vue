<template>
  <tv-demo invertTheme>
    <h2 class="title">TODOvue card</h2>
    <div v-for="(demo, index) in demos" :key="`demo-${index}`" class="demo">
      <h2>{{ demo.title }}</h2>
      <tv-card
        :image="demo.cardProps.image"
        :title="demo.cardProps.title"
        :labels="demo.cardProps.labels"
      >
        <template #title>Create Vue.js</template>
        <template #description>
          Vue.js (commonly known as Vue; pronounced /vjuː/, like "view") is an
          open-source JavaScript framework for building user interfaces and
          single-page applications. It was created by Evan You and is maintained
          by him and other active members of the core team who come from various
          companies such as Netlify and Netguru.
        </template>
        <template #textButton>Read More</template>
      </tv-card>
    </div>
  </tv-demo>
</template>

<script>
import TvDemo from "todovue-demo";
import TvCard from "@/component/TvCard.vue";
export default {
  name: "DemoPage",
  data() {
    return {
      demos: [
        {
          title: "TvCard Default",
          cardProps: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
            title: "Card Title",
            labels: [
              {
                id: 1,
                name: "JavaScript",
                color: "#F0DB4F",
              },
              {
                id: 2,
                name: "Vue.js",
                color: "#4FC08D",
              },
              {
                id: 3,
                name: "HTML",
                color: "#E34F26",
              },
            ],
          },
        },
        {
          title: "TvCard without labels",
          cardProps: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
            title: "Card Title",
            labels: [],
          },
        },
        {
          title:
            "TvCard with more than 3 labels (It is recommended to leave 3)",
          cardProps: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
            title: "Card Title",
            labels: [
              {
                id: 1,
                name: "JavaScript",
                color: "#F0DB4F",
              },
              {
                id: 2,
                name: "Vue.js",
                color: "#4FC08D",
              },
              {
                id: 3,
                name: "HTML",
                color: "#E34F26",
              },
              {
                id: 4,
                name: "CSS",
                color: "#1572B6",
              },
              {
                id: 5,
                name: "Git - GitHub",
                color: "#F05032",
              },
              {
                id: 6,
                name: "Bootstrap",
                color: "#7952B3",
              },
            ],
          },
        },
      ],
    };
  },
  components: {
    TvCard,
    TvDemo,
  },
};
</script>

<style>
.demo h2 {
  margin-top: 3rem !important;
  color: white !important;
}
</style>
