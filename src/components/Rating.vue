<template>
  <div class="rating">
    <button v-for="star in Math.floor(rating)" :key="star"><StarSVG /></button>
    <button v-if="!Number.isInteger(rating)"><StarHalfSVG /></button>
    <button v-for="star in Math.floor(5 - rating)" :key="star">
      <StarOutlineSVG />
    </button>
  </div>
</template>

<script>
import StarSVG from "../assets/star.svg";
import StarOutlineSVG from "../assets/star-outline.svg";
import StarHalfSVG from "../assets/star-half.svg";

export default {
  props: ["rating"],
  components: {
    StarSVG,
    StarOutlineSVG,
    StarHalfSVG,
  },
};
</script>

<style lang="sass" scoped>
.rating
  display: flex
  flex-flow: row nowrap

button
  padding: 0
  border: none
  background: none
  cursor: pointer
  width: 1em
  height: 1em
  margin-right: .25em

  & > svg
    fill: #f39e1d
</style>