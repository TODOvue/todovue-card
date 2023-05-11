import { shallowMount } from "@vue/test-utils";
import TvCard from "@/component/TvCard.vue";

describe("TvButton Component", () => {
  const configCard = {
    title: "Create Vue.js",
    description:
      "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications.",
    alt: "Card Image",
    image:
      "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
    primaryButtonText: "View more",
  };

  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
