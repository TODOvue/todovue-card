const labels = [
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
  {
    id: 7,
    name: "React",
    color: "#61DBFB",
  },
  {
    id: 8,
    name: "Angular",
    color: "#DD1B16",
  },
  {
    id: 9,
    name: "Sass",
    color: "#CC6699",
  },
  {
    id: 10,
    name: "TypeScript",
    color: "#007ACC",
  },
  {
    id: 11,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: 12,
    name: "Express.js",
    color: "#000000",
  },
  {
    id: 13,
    name: "jQuery",
    color: "#0769AD",
  },
  {
    id: 14,
    name: "PHP",
    color: "#777BB4",
  },
  {
    id: 15,
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    id: 16,
    name: "Python",
    color: "#3776AB",
  },
  {
    id: 17,
    name: "Django",
    color: "#092E20",
  },
  {
    id: 18,
    name: "Ruby",
    color: "#CC342D",
  },
  {
    id: 19,
    name: "Ruby on Rails",
    color: "#CC0000",
  },
  {
    id: 20,
    name: "GraphQL",
    color: "#E10098",
  },
  {
    id: 21,
    name: "RESTful API",
    color: "#008080",
  },
  {
    id: 22,
    name: "OAuth",
    color: "#444444",
  },
  {
    id: 23,
    name: "JSON",
    color: "#000000",
  },
  {
    id: 24,
    name: "XML",
    color: "#FF6600",
  },
  {
    id: 25,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    id: 26,
    name: "MySQL",
    color: "#4479A1",
  },
  {
    id: 27,
    name: "PostgreSQL",
    color: "#336791",
  },
  {
    id: 28,
    name: "Firebase",
    color: "#FFCA28",
  },
  {
    id: 29,
    name: "Amazon Web Services",
    color: "#FF9900",
  },
  {
    id: 30,
    name: "Google Cloud Platform",
    color: "#4285F4",
  },
];

export const demos = [
  {
    id: 1,
    title: "TvCard default",
    propsData: {
      configCard: {
        title: "Create Vue.js",
        description:
          "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications.",
        alt: "Card Image",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
        primaryButtonText: "View more",
      },
    },
    html: `<template>
  <tv-card
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script>
import { ref } from "vue";
import TvCard from "todovue-card";

export default {
  name: "Demo",
  components: {
    TvCard,
  },
  setup() {
    const configCard = ref({
      title: "Create Vue.js",
      description: "Vue.js (commonly known as Vue; pronounced /vjuː/...",
      alt: "Card Image",
      image: "https://todovue.com/vue.webp",
      primaryButtonText: "View more",
    });
    
    const handleButton = () => {
      console.log("Button clicked");
    }
    
    return {
      configCard,
      handleButton
    }
  }
};
</script>`,
  },
  {
    id: 2,
    title: "TvCard with labels",
    propsData: {
      configCard: {
        title: "Write JavaScript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
        primaryButtonText: "See more",
        alt: "Card Image",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/cards%2Fcode-g310d81d24_640.webp?alt=media&token=c25e7d00-9386-4823-bf56-f0d1081069d1",
        labels: labels,
      },
    },
    html: `<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script>
import { ref } from "vue";
import TvCard from "todovue-card";

export default {
  name: "Demo",
  components: {
    TvCard,
  },
  setup() {
    const configCard = ref({
      title: "Write JavaScript",
      description: "JavaScript, often abbreviated as JS...",
      primaryButtonText: "See more",
      alt: "Card Image",
      image: "https://todovue.com/code.webp",
      labels: [
        {
          id: 1,
          name: "JavaScript",
          color: "#F7DF1E",
        },
        {
          id: 2,
          name: "HTML",
          color: "#E34F26",
        },
        {
          id: 3,
          name: "CSS",
          color: "#1572B6",
          
        }
      ],
    });
    
    const handleLabel = (label) => {
      console.log(label);
    }
    
    const handleButton = () => {
      console.log("Button clicked");
    }
    
    return {
      configCard,
      handleButton,
      handleLabel
    }
  }
}`,
  },
  {
    id: 3,
    title: "TvCard with two buttons",
    propsData: {
      configCard: {
        title: "Design Web",
        description:
          "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
        primaryButtonText: "View code",
        secondaryButtonText: "View blog",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/cards%2Fweb-design-3411373_1280.webp?alt=media&token=249aaa7a-42e7-4fc1-98fc-edee650c01cd",
        alt: "Card Image",
        labels: labels,
      },
    },
    html: `<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    :configCard="configCard"
  />
</template>

<script>
import { ref } from "vue";
import TvCard from "todovue-card";

export default {
  name: "Demo",
  components: {
    TvCard,
  },
  setup() {
    const configCard = ref({
      title: "Design Web",
      description: "Web design encompasses many different skills...",
      primaryButtonText: "View code",
      secondaryButtonText: "View blog",
      image: "https://todovue.com/web-design.webp",
      labels: [
        {
          id: 1,
          name: "JavaScript",
          color: "#F7DF1E",
        },
        {
          id: 2,
          name: "HTML",
          color: "#E34F26",
        },
        {
          id: 3,
          name: "CSS",
          color: "#1572B6",
        }
      ],
    });

    const handleLabel = (label) => {
      console.log(label);
    }
    
    const handleButton = () => {
      console.log("Button clicked");
    }
    
    const handleSecondaryButton = () => {
      console.log("Secondary button clicked");
    }
    
    return {
      configCard,
      handleButton,
      handleLabel,
      handleSecondaryButton
    }
  }
</script>`,
  },
  {
    id: 4,
    title: "TvCard with custom colors",
    propsData: {
      configCard: {
        title: "Write Vue.js",
        description:
          "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications.",
        primaryButtonText: "View code",
        secondaryButtonText: "View blog",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/cards%2Ftyping-gf76f9bdc5_640.webp?alt=media&token=bbf414f6-9a98-484e-a020-901bf20efd15",
        alt: "Card Image",
        labels: labels,
        backgroundColor: "#46627f",
        color: "#ffffff",
        backgroundButtonColor: "#062131",
        colorButton: "#ffffff",
        backgroundButtonSecondaryColor: "#0eb096",
        colorButtonSecondary: "#000000",
      },
    },
    html: `<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    :configCard="configCard"
  />
</template>

<script>
import { ref } from "vue";
import TvCard from "todovue-card";

export default {
  name: "Demo",
  components: {
    TvCard,
  },
  setup() {
    const configCard = ref({
      title: "Write Vue.js",
      description: "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view')...",
      primaryButtonText: "View code",
      secondaryButtonText: "View blog",
      image: "https://todovue.com/vuejs.webp",
      labels: [
        {
          id: 1,
          name: "JavaScript",
          color: "#F7DF1E",
        },
        {
          id: 2,
          name: "HTML",
          color: "#E34F26",
        },
        {
          id: 3,
          name: "CSS",
          color: "#1572B6",
        },
      ],
      backgroundColor: "#46627f",
      color: "#ffffff",
      backgroundButtonColor: "#062131",
      colorButton: "#ffffff",
      backgroundButtonSecondaryColor: "#0eb096",
      colorButtonSecondary: "#000000",
    });
    
    const handleLabel = (label) => {
      console.log(label);
    }
    
    const handleButton = () => {
      console.log("Button clicked");
    }
    
    const handleSecondaryButton = () => {
      console.log("Secondary button clicked");
    }
    
    return {
      configCard,
      handleButton,
      handleLabel,
      handleSecondaryButton
    }
  }
</script>`,
  },
  {
    id: 5,
    title: "TvCard with multiple labels (default 3) with limitLabels",
    propsData: {
      configCard: {
        title: "Write JavaScript",
        description:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
        primaryButtonText: "See more",
        alt: "Card Image",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/cards%2Fcode-g310d81d24_640.webp?alt=media&token=c25e7d00-9386-4823-bf56-f0d1081069d1",
        labels: labels,
        limitLabels: 10,
      },
    },
    html: `<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script>
import { ref } from "vue";
import TvCard from "todovue-card";

export default {
  name: "Demo",
  components: {
    TvCard,
  },
  setup() {
    const configCard = ref({
      title: "Write JavaScript",
      description: "JavaScript, often abbreviated as JS...",
      primaryButtonText: "See more",
      image: "https://todovue.com/javascript.webp",
      labels: [
        {
          id: 1,
          name: "JavaScript",
          color: "#F7DF1E",
        },
        ...
      ],
      limitLabels: 10,
    });
    
    const handleLabel = (label) => {
      console.log(label);
    }
    
    const handleButton = () => {
      console.log("Button clicked");
    }
    
    return {
      configCard,
      handleButton,
      handleLabel
    }
  }
}
</script>`,
  },
];
