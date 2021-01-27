<template>
  <div>
    <Jumbotron class="jumbotron" title="Reduction sur les articles de jardin" />
    <section>
      <h1>Les offres actuelles</h1>
      <div class="current-offers">
        <Card v-for="article in offers" :key="article.id" :article="article" class="card" />
      </div>
    </section>
    <section class="guides" :style="`background-image: url(${GuidesImg})`">
      <div class="guides-container">
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </section>
    <section>
      <h1>Les meilleures categories</h1>
      <div class="promoted-categories">
        <CategoryCard v-for="category in bestCategories" :key="category.id" :category="category" />
      </div>
    </section>
    <section>
      <div>
        <Newsletter class="newsletter" />
      </div>
    </section>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import Card from "../components/Card.vue";
import GuideCard from "../components/GuideCard.vue";
import CategoryCard from "../components/CategoryCard.vue";
import Newsletter from "../components/Newsletter.vue";

import categories from "../data/categories.json";
import articles from "../data/articles.json";

import GuidesImg from "../assets/guides.jpg";

export default {
  data() {
    return {
      GuidesImg,
      categories,
    };
  },
  computed: {
    offers() {
      return [
        articles[2],
        articles[14],
        articles[6],
        articles[4],
      ];
    },
    bestCategories() {
      return [
        categories[0],
        categories[1],
        categories[3],
        categories[4],
      ];
    }
  },
  components: {
    Jumbotron,
    Card,
    GuideCard,
    CategoryCard,
    Newsletter,
  },
};
</script>

<style lang="sass" scoped>
.jumbotron
  height: 500px

.card
  margin: 1em
  flex: 1 1 250px
  max-width: 300px

h1
  font-family: DIRTYBAG
  text-align: center
  font-size: 2em

section
  display: flex
  flex-flow: column nowrap
  align-items: center

  & > div
    display: flex
    flex-flow: row wrap
    justify-content: center
    width: 100%
    max-width: 1200px

.guides
  position: relative
  background-repeat: no-repeat
  background-blend-mode: multiply
  background-color: rgba(0,0,0,0.4)
  margin-top: 2em
  background-size: cover

.guides-container > *
  flex: calc(50% - 2em) 0
  margin: 1em

.promoted-categories
  flex-flow: row wrap
  justify-content: flex-start

  & > *
    flex: 1 1 calc(25% - 2em)
    height: 400px
    margin: 1em
    min-width: 240px

.newsletter
    margin: 1em

@media screen and (max-width: 1200px)
  .promoted-categories > *
    flex-basis: calc(50% - 2em)

@media screen and (max-width: 600px)
  .guides-container > *
    flex-basis: 100%
</style>