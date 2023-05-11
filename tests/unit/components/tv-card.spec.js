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

  it("should not render card when configCard is null", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard: null,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emmit event when primary button is clicked", async () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard,
      },
    });
    wrapper.vm.handleClick();
    expect(wrapper.emitted("clickButton")).toBeTruthy();
  });

  it("should emmit event when secondary button is clicked", async () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard: {
          ...configCard,
          secondaryButtonText: "View more",
        },
      },
    });
    wrapper.vm.handleSecondaryClick();
    expect(wrapper.emitted("clickSecondaryButton")).toBeTruthy();
  });

  it("should emmit event when label is clicked", async () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard: {
          ...configCard,
          labels: ["Vue.js", "JavaScript"],
        },
      },
    });
    wrapper.vm.handleClickLabel("Vue.js");
    expect(wrapper.emitted("clickLabel")).toBeTruthy();
  });

  it("should render custom style", () => {
    const wrapper = shallowMount(TvCard, {
      props: {
        configCard: {
          ...configCard,
          backgroundColor: "#000",
          color: "#fff",
          backgroundButtonColor: "#fff",
          colorButton: "#000",
          backgroundButtonSecondaryColor: "#fff",
          colorButtonSecondary: "#000",
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
