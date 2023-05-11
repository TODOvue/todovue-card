<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TvCard
###### The TvCard is a component that allows you to display a card with a title, a subtitle, a description, an image and a button.

[![npm](https://img.shields.io/npm/v/todovue-card.svg)](https://www.npmjs.com/package/todovue-card) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/todovue-card/deploys) [![Pipeline](https://github.com/TODOvue/todovue-card/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/TODOvue/todovue-card/actions/workflows/pipeline.yml) [![npm](https://img.shields.io/npm/dm/todovue-card.svg)](https://www.npmjs.com/package/todovue-card) [![npm](https://img.shields.io/npm/dt/todovue-card.svg)](https://www.npmjs.com/package/todovue-card) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-card) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-card)

<img width="250" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvCard%2Ftvcard%20default.png?alt=media&token=7a234697-5b02-4186-97e2-a3bb4928da08" alt="TODOvue Card default"> <img width="250" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvCard%2Ftvcard%20labels.png?alt=media&token=1369de57-1c79-41fe-97f6-34aede2d805c" alt="TODOvue Card labels"> <img width="230" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvCard%2Ftvcard%20multiple%20labels.png?alt=media&token=afbd292b-30fa-4d29-b88e-f11d943f7386" alt="TODOvue Card multiple labels"> <img width="250" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvCard%2Ftvcard%20two%20buttons.png?alt=media&token=b147b172-df98-4da6-8b1f-dd169a1a890b" alt="TODOvue Card two button"> <img width="250" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvCard%2Ftvcard%20custom%20color.png?alt=media&token=587ea860-5b7d-4fd9-874f-f0a11a76b5b5" alt="TODOvue Card two button custom color">

## Table of Contents
- [Demo](https://todovue-card.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-card/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-card/blob/master/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-demo/card/master/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install todovue-card
```
```bash
yarn add todovue-card
```
Import
```js
import { TvCard } from 'todovue-card'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvCard from "todovue-card";

const app = createApp(App);
app.component("TvCard", TvCard);
app.mount("#app");
```
## Usage
```html
<template>
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
</script>
```

## Props
| Name       | Type   | Default                  | Description                        |
|------------|--------|--------------------------|------------------------------------|
| configCard | Object | [See below](#configcard) | Object with the card configuration |

### configCard
| Name                           | Type   | Default   | Description                                   | required |
|--------------------------------|--------|-----------|-----------------------------------------------|----------|
| title                          | String | `""`      | Card title                                    | `true`   |
| description                    | String | `""`      | Card description                              | `true`   |
| image                          | String | `""`      | Card image                                    | `true`   |
| alt                            | String | `""`      | Card image alt                                | `true`   |
| primaryButtonText              | String | `""`      | Card primary button text                      | `true`   |
| secondaryButtonText            | String | `""`      | Card secondary button text                    | `false`  |
| labels                         | Array  | `[]`      | Card labels                                   | `false`  |
| limitLabels                    | Number | `3`       | Card limit labels                             | `false`  |
| backgroundColor                | String | `#0E131F` | Card custom background color                  | `false`  |
| color                          | String | `#AFDEDC` | Card custom color                             | `false`  |
| backgroundButtonColor          | String | `#EF233C` | Card custom background primary button color   | `false`  |
| buttonColor                    | String | `#F4FAFF` | Card custom primary button color              | `false`  |
| backgroundButtonSecondaryColor | String | `#2F80ED` | Card custom background secondary button color | `false`  |
| colorButtonSecondary           | String | `#F4FAFF` | Card custom secondary button color            | `false`  |

## Events
| Name                 | Description                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| clickButton          | Event emitted when the primary button is clicked, returns the button's value   |
| clickSecondaryButton | Event emitted when the secondary button is clicked, returns the button's value |
| clickLabel           | Event emitted when the label is clicked, returns the label's value             |

## Customize
You can customize the card by cardConfig, you can see the [props](#props) section to see the available options

```js
const configCard = ref({
  backgroundColor: "#000000", // Card custom background color
  color: "#ffffff", // Card custom color
  backgroundButtonColor: "#ffffff", // Card custom background primary button color
  buttonColor: "#000000", // Card custom primary button color
  backgroundButtonSecondaryColor: "#ffffff", // Card custom background secondary button color
  colorButtonSecondary: "#000000", // Card custom secondary button color
});

```

```html
<template>
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
      backgroundColor: "#000000",
      color: "#ffffff",
      backgroundButtonColor: "#ffffff",
      buttonColor: "#000000",
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
</script>
```

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-card.git
```
```bash
cd todovue-card
```

Install the dependencies
```bash
yarn install
```
Run the project
```bash
yarn demo
```
Run the tests
```bash
yarn test:unit
```
Run the linter
```bash
yarn lint
```
Run the build It is not necessary to generate build, since it is generated when you do PR to the master branch
```bash
yarn build
```

## License
[MIT](https://github.com/TODOvue/todovue-card/blob/master/LICENSE)
