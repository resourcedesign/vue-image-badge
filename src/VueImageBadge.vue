<template>
    <span :class="{ badger: text !== ''}" :data-badge="text" ><img :class="imageClass" :src="imagesrc" /></span>
</template>

<script>
  export default {
    name: 'vue-image-badge',
    props: {
      imagesrc: {
        type: String,
        default: ''
      },
      imageClass: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>
  .badger {
    position: relative;
  }
  .badger[data-badge]:after {
   content: attr(data-badge);
   position: absolute;
   top:-10px;
   right:-10px;
   font-size:.7em;
   background:red;
   color:white;
   width:18px;height:18px;
   text-align:center;
   line-height:18px;
   border-radius:50%;
   box-shadow:0 0 1px #333;
  }
</style>
