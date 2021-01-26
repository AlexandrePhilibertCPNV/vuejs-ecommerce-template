<template>
  <div class="wrapper">
    <div>
      <h1>Panier</h1>
      <div>
        <div class="article" v-for="article in articles" :key="article.id">
          <img :src="`https://picsum.photos/id/${article.id}/200/160`" alt="" />
          <h2 class="name">{{ article.name }}</h2>
          <QuantityPicker :quantity="article.quantity" :article="article" />
          <div class="price">
            <span class="currency">CHF</span>
            <span class="value">{{ (article.price * article.quantity).toFixed(2) }}</span>
          </div>
        </div>
      </div>
      <div class="total-container">
        <div class="total-title">Montant total</div>
        <div class="total"><span>CHF</span><span>{{ total.toFixed(2) }}</span></div>
        <router-link to="/checkout" class="checkout-button"><span>Passer en caisse</span><ChevronRight /></router-link >
      </div>
    </div>
  </div>
</template>

<script>
import QuantityPicker from "../components/QuantityPicker.vue";
import ChevronRight from "../assets/chevron-right.svg";

export default {
  components: { QuantityPicker, ChevronRight },
  computed: {
    articles() {
      return this.$store.state.cart;
    },
    total() {
      return this.articles.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
      }, 0);
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center

  & > div
    flex: 1 1 auto
    max-width: 1200px

.article
  display: flex
  align-items: center
  border-bottom: 1px solid #d7d7d7

  &:first-child
    border-top: 1px solid #d7d7d7

  & > img
    padding: 1em
    margin: 1em
    object-fit: cover

  & > .name
    font-weight: normal
    font-size: 1.2em
    flex-grow: 3

  & > *
    flex: 1 1

  & > .price
    text-align: right

    & > .currency
      margin-right: .5em

.total-container
  display: flex
  justify-content: flex-end
  align-items: center
  margin: 2em 0

  & > *
    margin: 0 1em

.total-title
  font-weight: bold

.total
  color: #777

  & > span:first-child
    margin-right: .5em

.checkout-button
  color: #fff
  padding: .5em 1.5em
  text-decoration: none
  cursor: pointer
  background-color: #c87800
  border-radius: .25em
  margin-left: .75em
  display: flex
  align-items: center

  &:hover
    background-color: #de8908

  & svg
    fill: #fff

</style>