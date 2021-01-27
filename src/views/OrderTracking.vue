<template>
  <div class="wrapper">
    <div>
      <h1>
        État de la commande {{ order.id }} du
        {{ new Date(order.date).toLocaleDateString() }}
      </h1>
      <div class="order-details">
        <div>
          <div>Status de paiement</div>
          <div :class="{ 'status-payed': order.paimentStatus == 'payed' }">
            {{ paimentStatus }}
          </div>
        </div>
        <div>
          <div>Montant total</div>
          <div class="price-total">
            <span class="currency">CHF</span
            ><span class="price">{{ total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
      <div class="articles">
        <div class="article" v-for="article in order.articles" :key="article.id">
          <h2 class="name">{{ article.name }}</h2>
          <div class="quantity">{{ article.quantity }}x</div>
          <div class="price">
            <span class="currency">CHF</span>
            <span class="value">{{
              (article.prices.current * article.quantity).toFixed(2)
            }}</span>
          </div>
        </div>
      </div>
      <h1>Suivi de la commande</h1>
      <TrackingTimeline class="tracking-timeline" :order="order" />
    </div>
  </div>
</template>

<script>
import orders from "../data/orders.json";

import TrackingTimeline from "../components/TrackingTimeline.vue";

export default {
  components: {
    TrackingTimeline,
  },
  computed: {
    paimentStatus() {
      switch (this.order.paimentStatus) {
        case "payed":
          return "payé";
        default:
          return "indéfini";
      }
    },
    order() {
      return orders.find(order => order.id == this.$route.params.id);
    },
    total() {
      return this.order.articles.reduce((acc, curr) => {
        return acc + curr.prices.current * curr.quantity;
      }, 0);
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

.order-details
  display: flex

  & > div
    display: flex
    font-size: .9em

    & > div
      margin-right: 1em

    & > div:first-child
      margin: 0 .5em
      font-weight: bold

.price-total
  color: #797979

.currency
  margin-right: .25em

.status-payed
  color: #1F980B

.articles
  margin: 1em 0

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
    font-size: 1em
    flex-grow: 3

  & > .quantity
    padding: 1em

  & > *
    flex: 1 1

  & > .price
    text-align: right

    & > .currency
      margin-right: .5em

.tracking-timeline
  margin: 3em 0
</style>