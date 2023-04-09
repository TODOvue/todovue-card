// eslint-disable-next-line no-unused-vars
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
    title: "TvCard default (Default labels is 3)",
    propsData: {
      title: "Create Vue.js",
      description:
        "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications. It was created by Evan You and is maintained by him and other active members of the core team who come from various companies such as Netlify and Netguru.",
      textButton: "Read more",
      image:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
      alt: "Card Image",
      labels: labels,
    },
    html: `<!-- By default, it shows 3 labels -->
<tv-card
  image="https://todovue.com/vue.webp"
  alt="Card Image"
  :labels="labels"
  @clickButton="handleClickButton"
  @clickLabel="handleClickLabel"
>
  <template #title>
    Create Vue.js
  </template>
  <template #description>
    Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework
    for building user interfaces and single-page applications. It was created by Evan You
    and is maintained by him and other active members of the core team who come from
    various companies such as Netlify and Netguru.
  </template>
  <template #textButton>
    Read more
  </template>
</tv-card>`,
  },
  {
    id: 2,
    title: "TvCard without labels",
    propsData: {
      title: "Create Vue.js",
      description:
        "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications. It was created by Evan You and is maintained by him and other active members of the core team who come from various companies such as Netlify and Netguru.",
      textButton: "Read more",
      image:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
      alt: "Card Image",
    },
    html: `<tv-card
  image="https://todovue.com/vue.webp"
  alt="Card Image"
  @clickButton="handleClickButton"
  @clickLabel="handleClickLabel"
>
  <template #title>
    Create Vue.js
  </template>
  <template #description>
    Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework
    for building user interfaces and single-page applications. It was created by Evan You
    and is maintained by him and other active members of the core team who come from
    various companies such as Netlify and Netguru.
  </template>
  <template #textButton>
    Read more
  </template>
</tv-card>`,
  },
  {
    id: 3,
    title: "TvCard with more labels",
    propsData: {
      title: "Create Vue.js",
      description:
        "Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework for building user interfaces and single-page applications. It was created by Evan You and is maintained by him and other active members of the core team who come from various companies such as Netlify and Netguru.",
      textButton: "Read more",
      image:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
      alt: "Card Image",
      labels: labels,
      limitLabels: 10,
    },
    html: `<tv-card
  image="https://todovue.com/vue.webp"
  alt="Card Image"
  :labels="labels"
  :limitLabels="10"
  @clickButton="handleClickButton"
  @clickLabel="handleClickLabel"
>
  <template #title>
    Create Vue.js
  </template>
  <template #description>
    Vue.js (commonly known as Vue; pronounced /vjuː/, like 'view') is an open-source JavaScript framework
    for building user interfaces and single-page applications. It was created by Evan You
    and is maintained by him and other active members of the core team who come from
    various companies such as Netlify and Netguru.
  </template>
  <template #textButton>
    Read more
  </template>
</tv-card>`,
  },
];
