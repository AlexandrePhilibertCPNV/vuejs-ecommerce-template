<template>
  <div>
    <div class="steps">
      <div
        v-for="step in steps()"
        :key="step.status"
        class="step"
        :class="{ 'step-done': step.done }"
      >
        <div class="marker">
          <CheckMarkSVG v-if="step.done" />
        </div>
        <div class="name">{{ step.name }}</div>
        <div class="time" v-if="step.timestamp">
          {{ new Date(step.timestamp).toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckMarkSVG from "../assets/check-mark.svg";

const steps = [
  {
    name: "Commande effectuée",
    status: "order_placed",
  },
  {
    name: "Paiement accepté",
    status: "paiment_accepted",
  },
  {
    name: "Livraison",
    status: "delivering",
  },
  {
    name: "Livré",
    status: "delivered",
  },
];

export default {
  components: {
    CheckMarkSVG,
  },
  props: ["order"],
  methods: {
    steps() {
      return steps.map((step) => {
        let orderStatus = this.order.tracking.find(s => s.status == step.status);
        
        return { ...step, done: orderStatus.done };
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.steps
    display: flex
    flex-flow: row nowrap
    position: relative
    justify-content: space-between

    &::before
        position: absolute
        content: ""
        width: 100%
        height: 2px
        top: 1em
        z-index: -1
        background-color: #d7d7d7

.marker
    display: flex
    align-items: center
    justify-content: center
    width: 1.5em
    height: 1.5em
    border-radius: 50%
    background-color: #d7d7d7
    margin: .25em

.step
    display: flex
    flex-flow: column nowrap
    align-items: center
    position: relative
    user-select: none

    &:first-child:before
        content: ""
        background-color: #fff
        left: 0
        right: 50%
        height: 100%
        position: absolute

    &:last-child:before
        content: ""
        background-color: #fff
        left: 50%
        right: 0
        height: 100%
        position: absolute

    & > *
        z-index: 1
        margin-top: .25em

.step-done

    & > .name
        font-weight: bold

    & > .marker
        fill: #fff
        background-color: #1F980B
        width: 2em
        height: 2em
        margin: 0
</style>