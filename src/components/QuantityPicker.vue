<template>
  <div class="picker">
    <button @click="decrement">-</button>
    <input
      @submit="increment"
      class="quantity"
      type="number"
      min="1"
      v-model.number="counter"
    />
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
  props: ["article", "quantity"],
  mounted() {
    this.counter = this.quantity;
  },
  methods: {
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
  },
  watch: {
    counter(value) {
      if (value === 0) {
        this.$store.commit("deleteCart", this.article);
      } else {
        this.$store.commit("setCart", {
          article: this.article,
          quantity: this.counter,
        });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.picker
  display: flex
  flex-flow: row nowrap

.quantity
  width: 2em
  border: none
  border-top: 1px solid #d7d7d7
  border-bottom: 1px solid #d7d7d7
  text-align: center
  background-color: #F2F2F2

button
  padding: .25em .65em
  border: 1px solid #d7d7d7
  background: none
  cursor: pointer

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0

input[type=number]
  -moz-appearance: textfield
</style>