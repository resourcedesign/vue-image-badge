# vue-image-badge
[![Build Status](https://travis-ci.org/resourcedesign/vue-image-badge.svg?branch=master)](https://travis-ci.org/resourcedesign/vue-image-badge)
[![Latest Stable Version](https://img.shields.io/npm/v/vue-image-badge.svg)](https://www.npmjs.com/package/vue-image-badge)

> A Vue component to add badges to images

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## Installation

``` bash
npm install -S vue-image-badge
```

## Usage
In your HTML
``` xml
<badge imagesrc="pathto/yourimage.jpg" text="1" imageClass="css-class-for-image"/>
```

To use it globally

``` js
import Vue from 'vue'
import { VueImageBadge } from 'vue-image-badge'

Vue.use(VueImageBadge);

```
or only in a single component

``` js
import { VueImageBadge } from 'vue-image-badge'
export default {
  name: 'myapp',
  components: {
    'badge': VueImageBadge
  }
}
```
Note, if you are using web-pack, you should specify the image url using `require`, e.g.

``` js
import { VueImageBadge } from 'vue-image-badge'
export default {
  name: 'app',
  components: {
    'badge': VueImageBadge
  },
  data: function () {
    return {
      imageSrc: require('./assets/images/image.jpg')
    }
  }
}
```


## Props

Property|Type|Default|Description
---|---|---|---
imagesrc|string||path to image
text|string||text to display in badge
imageClass|string||class for the the img tag

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
