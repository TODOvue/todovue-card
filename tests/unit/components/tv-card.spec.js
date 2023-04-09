import { shallowMount } from "@vue/test-utils";
import TvCard from "@/component/TvCard.vue";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        image: "https://via.placeholder.com/150",
        alt: "Title",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emits a click event when the button is clicked", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        image: "https://via.placeholder.com/150",
        alt: "Title",
      },
    });
    wrapper.find("tv-button-stub").trigger("click");
    expect(wrapper.emitted("clickButton")).toBeTruthy();
  });

  it("emits a click event when the label is clicked", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        image: "https://via.placeholder.com/150",
        alt: "Title",
        labels: [
          {
            id: 1,
            name: "Vue.js",
            color: "#4FC08D",
          },
          {
            id: 2,
            name: "JavaScript",
            color: "#F0DB4F",
          },
        ],
      },
    });
    wrapper.find("tv-label-stub").trigger("click");
    expect(wrapper.emitted("clickLabel")).toBeTruthy();
  });
});
