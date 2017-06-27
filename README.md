# vue-image-badges
[![Build Status](https://travis-ci.org/resourcedesign/vue-image-badges.svg?branch=master)](https://travis-ci.org/resourcedesign/vue-image-badges)
[![Coverage Status](https://coveralls.io/repos/github/resourcedesign/vue-image-badges/badge.svg?branch=master)](https://coveralls.io/github/resourcedesign/vue-image-badges?branch=master)
[![Latest Stable Version](https://img.shields.io/npm/v/vue-image-badges.svg)](https://www.npmjs.com/package/vue-image-badges)

> A Vue component to add badges to images

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## Installation

``` bash
npm install -S vue-image-badges
```

## Usage
In your HTML
``` xml
<badge imagesrc="pathto/yourimage.jpg" text="1" imageClass="css-class-for-image"/>
```

``` js
import Vue from 'vue';
import VueBadge from 'vue-image-badges';

Vue.use(VueBadge);

```

## Props

Property|Type|Default|Description
---|---|---|---
imagesrc|string||path to image
text|string||text to display in badge
imageClass|string||class for the the img tag

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
