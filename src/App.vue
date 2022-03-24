<template>
  <div id="app">
    <component :is="layout">
      <div class="rectangle-wrapper">
        <default-rectangle v-for="(_, index) in 6" :key="index"/>
      </div>
    </component>
  </div>
</template>

<script>
import DefaultRectangle from './components/DefaultRectangle.vue';

export default {
  components: { DefaultRectangle },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || 'default';
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>

<style lang="scss" scoped>
.rectangle-wrapper {
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 20px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
