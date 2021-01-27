<template>
  <div class="wrapper">
    <div>
      <h1>Favoris</h1>
        <p class="empty" v-if="articles.length == 0">Vous n'avez aucun article dans vos favoris</p>
      <div
        :to="`/article/${article.id}`"
        class="article"
        v-for="article in articles"
        :key="article.id"
      >
        <h2 class="name"><router-link :to="`/article/${article.id}`">{{ article.name }}</router-link></h2>
        <button
          @click.stop="e => toggleFavorite(article)"
          class="favorite-button"
          :class="{ 'favorite-button-active': isInFavorites }"
          title="Ajouter aux favoris"
        >
          <FavoriteSVG />
        </button>
        <div class="price">
          <span class="currency">CHF</span>
          <span class="value">{{ article.prices.current.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteSVG from "../assets/favorite.svg";

export default {
  components: {
    FavoriteSVG,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.articles = this.$store.state.favorites;
  },
  methods: {
    toggleFavorite(article) {
      this.$store.commit("toggleFavorite", article);
    },
    isInFavorites() {
      return this.$store.state.favorites.find(
        (article) => article.id == this.article.id
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper
    display: flex
    justify-content: center
    margin: 0 2em

    & > div
        flex: 1 1 auto
        max-width: 1200px

h1
    font-weight: normal

.empty
  text-align: center
  margin: 5em 0

.article
    display: flex
    align-items: center
    border-bottom: 1px solid #d7d7d7

    &:first-child
        border-top: 1px solid #d7d7d7

    & > img
        margin: 1.5em
        object-fit: cover
        width: 100%
        height: 150px
        background-color: #aaa

    & > .name
        font-weight: normal
        font-size: 1.2em
        flex-grow: 3
      

        & > a
            color: inherit
            text-decoration: none

            &:hover
                color: #c80000

    & > *
        flex: 1 1

    & > .price
        text-align: right

        & > .currency
            margin-right: .5em

.favorite-button
  padding: 0
  border: none
  background: none
  cursor: pointer
  width: 2em
  height: 2em

  &.favorite-button-active svg
    fill: #c80000

  & svg
    fill: #d7d7d7
    width: 100%
    height: 100%

    &:hover
      fill: #c80000
</style>