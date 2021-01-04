<template>
  <div>
    <img src="" alt="" />
    <div>
      <div>
        <span>{{ article.prices.current }}.-</span>
        <span v-if="isOnSale">au lieu de {{ article.prices.default }}.-</span>
      </div>
      <div class="rating"></div>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        prices: {
          default: 199,
          current: 99,
        },
      },
    };
  },
  computed: {
    isOnSale() {
      return this.article.prices.current != this.article.prices.default;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>