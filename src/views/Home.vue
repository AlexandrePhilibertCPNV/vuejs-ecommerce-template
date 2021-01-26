<template>
  <div>
    <Jumbotron class="jumbotron" title="Reduction sur les articles de jardin" />
    <section>
      <h1>Les offres actuelles</h1>
      <div class="current-offers">
        <Card class="card" />
        <Card class="card" />
        <Card class="card" />
        <Card class="card" />
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
        <CategoryCard :category="categories[0].subcategories[1]" />
        <CategoryCard :category="categories[1].subcategories[3]" />
        <CategoryCard :category="categories[3].subcategories[5]" />
        <CategoryCard :category="categories[3]" />
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

import GuidesImg from "../assets/guides.jpg";

export default {
  data() {
    return {
      GuidesImg,
      categories,
    };
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