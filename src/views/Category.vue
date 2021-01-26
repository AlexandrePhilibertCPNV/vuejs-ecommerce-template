<template>
  <div class="wrapper">
    <div>
      <h1>{{ category.name }}</h1>
      <div class="actions">
        <div>
          <div>Filtrer par</div>
          <select name="price">
            <option selected disabled>Prix</option>
          </select>
          <select name="brand" id="">
            <option selected disabled>Marque</option>
          </select>
        </div>
        <div>
          <div>Trier par</div>
          <select name="sort">
            <option value="relevance">Pertinence</option>
            <option value="price_asc">Prix coroissant</option>
            <option value="price_desc">Prix décroissant</option>
            <option value="name_asc">Nom croissant</option>
            <option value="name_desc">Nom décroissant</option>
            <option value="rating">Évaluation</option>
          </select>
        </div>
      </div>
      <div class="articles">
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
        <Card class="article" />
      </div>
    </div>
  </div>
</template>

<script>
import categories from "../data/categories.json";

import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  computed: {
    category() {
      return categories.find(
        (category) => category.id == this.$route.params.id
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
    font-size: 1.5em
    margin-top: 1em

.actions
    display: flex
    justify-content: space-between
    color: #797979

    & > div
        display: flex
        align-items: center

        & > *
            margin: 0 .25em

select
    padding: .5em

.articles
    display: flex
    flex-flow: row wrap
    margin: 1em -1em

.article
    flex: 0 1 calc(25% - 2em)
    margin: .5em 1em
</style>