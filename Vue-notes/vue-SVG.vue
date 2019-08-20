<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
    <!-- 将SVG当做一个全局组件来使用  注册 -->
    <!-- 每次使用的时候将类名传入拿到assets/icons/下的对应的SVG文件渲染 -->
    <!-- 需要挂载全局组件 -->
    <!-- SVG组件使用计算属性 -->
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return 'svg-icon svg-icon--' + this.name;
    }
  }
};
</script>

<style>
  .svg-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
    overflow: hidden;
  }
</style>
