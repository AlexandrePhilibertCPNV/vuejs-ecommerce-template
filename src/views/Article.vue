<template>
  <div class="wrapper">
    <div class="container">
      <div class="top-container">
        <div class="left-container">
          <img src="https://picsum.photos/600/400" alt="" />
          <div class="image-scoller-container">
            <button><ChevronLeftSVG /></button>
            <div class="image-scoller">
              <img src="https://picsum.photos/250/150" alt="" />
              <img src="https://picsum.photos/250/150" alt="" />
              <img src="https://picsum.photos/250/150" alt="" />
            </div>
            <button><ChevronRightSVG /></button>
          </div>
        </div>
        <div class="right-container">
          <h1 class="name">{{ article.name }}</h1>
          <div class="rating-container">
            <Rating rating="4.5" />
            <div>12 évaluations</div>
          </div>
          <div class="price">
            <span class="currency">CHF</span
            ><span class="value">{{ article.price.toLocaleString() }}</span>
          </div>
          <hr />
          <div class="article-actions">
            <div class="cart-actions">
              <QuantityPicker />
              <button @click="addCart" class="cart-button">
                Ajouter au panier
              </button>
            </div>
            <button @click="toggleFavorite" class="favorite-button" :class="{ 'favorite-button-active': isFavorite }" title="Ajouter aux favoris">
              <FavoriteSVG />
            </button>
          </div>
          <div class="code">Art. 98745334</div>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            ipsum iste magnam mollitia quo, molestiae dolore eius nisi quasi
            animi deleniti, debitis incidunt nobis iusto eum placeat, aperiam
            labore ullam laudantium. Provident suscipit doloribus, error quidem
            dicta animi quibusdam aliquam?
          </p>
          <hr />
        </div>
      </div>
      <div class="tabs-container">
        <div class="tab-menu">
          <button class="tab-switch tab-switch-active">Description</button>
          <button class="tab-switch">Avis</button>
        </div>
        <div class="tab-container">
          <div>
            <h1>Spécifications principales</h1>
            <div class="specs">
              <div>
                <div>Numéro d'article</div>
                <div>630774500000</div>
              </div>
              <div>
                <div>Type de traction</div>
                <div>Essence</div>
              </div>
              <div>
                <div>Moteur</div>
                <div>T375 OHV</div>
              </div>
              <div>
                <div>Rendement</div>
                <div>1200 cm²</div>
              </div>
              <div>
                <div>Cylindrée</div>
                <div>123 cm³</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "../components/Rating.vue";
import QuantityPicker from "../components/QuantityPicker.vue";

import ChevronLeftSVG from "../assets/chevron-left.svg";
import ChevronRightSVG from "../assets/chevron-right.svg";
import FavoriteSVG from "../assets/favorite.svg";

export default {
  data() {
    return {
      article: {
        name: "Whirlpool Samba avec inverseur de couleur blanc",
        price: 1995.95,
        id: 1,
      },
    };
  },
  components: {
    Rating,
    QuantityPicker,
    ChevronLeftSVG,
    ChevronRightSVG,
    FavoriteSVG,
  },
  methods: {
    addCart() {
      this.$store.commit("addCart", { article: this.article, quantity: 1 });
    },
    toggleFavorite() {
      this.$store.commit("toggleFavorite", this.article);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    isFavorite() {
      return !!this.$store.state.favorites.find(article => article.id == this.article.id);
    }
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-flow: column nowrap
  align-items: center

.container
  max-width: 1200px
  margin: 0 5em

.top-container
  display: flex
  flex-flow: row wrap
  margin-top: 2em
  justify-content: center

.left-container, .right-container
  display: flex
  flex-flow: column nowrap
  width: 50%

.right-container
  padding-left: 2em

.name
  margin-top: 0
  margin-bottom: .25em
  font-size: 1.5em
  font-weight: normal

hr
  border: none
  border-bottom: 1px solid #d7d7d7
  width: 100%
  margin: 1em 0

.image-scoller-container
  display: flex
  margin-top: 2em
  height: 100px

  & .image-scoller
    display: flex
    min-width: 0

    & > img
      flex: 1 1 25%
      margin: 0 .5em
      min-width: 0
      object-fit: cover

  & button
    background: none
    border: 1px solid #d7d7d7
    border-radius: .5em
    cursor: pointer

    &:hover
      background-color: #dfdfdf

.rating-container
  display: flex
  align-items: center
  font-size: .8em

.price
  color: #E08702
  margin-top: .5em

  & > .value
    font-weight: bold
    font-size: 1.25em
    margin-left: .25em

  & > .currency
    font-variant: small-caps

.article-actions
  display: flex
  justify-content: space-between
  margin-bottom: .5em

.cart-actions
  display: flex

.cart-button
  color: #fff
  padding: .5em 1.5em
  text-decoration: none
  cursor: pointer
  background-color: #c87800
  border-radius: .25em
  border: none
  margin-left: .75em

  &:hover
    background-color: #de8908

.code
  font-size: .9em
  margin-top: .5em

.description
  text-align: justify

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

    &:hover
      fill: #c80000

.specs > div
  display: flex
  justify-content: space-between
  border-bottom: 1px solid #d7d7d7
  padding: .85em

  &:first-child
    border-top: 1px solid #d7d7d7

  & > div:first-child
    flex: 1 0 30%
    min-width: 250px

  & > div:last-child
    flex: 1 0 70%
    text-align: left

.tabs-container
  margin: 3em 0

.tab-switch
  position: relative
  margin: 0 .5em
  padding: .5em 1.5em
  border: none
  background: none
  cursor: pointer
  border: 1px solid #d7d7d7
  border-bottom: none
  border-radius: .25em .25em 0 0

  &:hover
    background-color: #efefef

  &.tab-switch-active
    border-top: 4px solid #C87800

    &:after
      position: absolute
      content: ""
      width: 100%
      height: 1px
      bottom: -1px
      background-color: #fff
      left: 0
      right: 0

.tab-menu
  border-bottom: 1px solid #d7d7d7
</style>