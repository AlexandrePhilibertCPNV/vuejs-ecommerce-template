<template>
  <router-link :to="`/article/${article.id}`" class="card">
    <div class="content">
      <img class="img" :src="img" alt="" />
      <div class="row">
        <div class="price-container">
          <span class="price">{{ article.prices.current.toFixed(2) }}.-</span>
          <span class="sale-text" v-if="isOnSale">
            au lieu de {{ article.prices.default.toFixed(2) }}.-</span
          >
        </div>
        <Rating :rating="article.rating"/>
      </div>
      <div class="title">{{ article.name }}</div>
      <div v-if="isOnSale" class="discount">{{ discount }}</div>
    </div>
  </router-link>
</template>

<script>
import Rating from './Rating.vue';

export default {
  components: {
    Rating,
  },
  props: ['article'],
  computed: {
    isOnSale() {
      return this.article.prices.current != this.article.prices.default;
    },
    img() {
      return `https://picsum.photos/id/${this.article.id}/500/600`;
    },
    discount() {
      return (
        Math.round(
          (1 - (this.article.prices.current / this.article.prices.default)) * 100
        ) + "%"
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.card
  padding: 1em
  border: 1px solid #d7d7d7
  border-radius: 1em
  cursor: pointer
  user-select: none
  color: inherit
  text-decoration: none

  &:hover
    background-color: #eee

.content
  position: relative

  & > *
    margin: .5em 0

.row
 display: flex
 justify-content: space-between 

.img
  width: 100%
  height: 250px
  max-height: 250px
  background-color: #aaa
  object-fit: cover

.price
  font-weight: bold
  color: #c80000

.sale-text
  font-size: .75em
  margin-left: .25em
  color: #8c8c8c

.discount
  position: absolute
  top: .5em
  right: .5em
  background-color: #c80000
  padding: .5em
  font-weight: bold
  color: #fff
  pointer-events: none
</style>