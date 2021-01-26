<template>
  <div class="rating">
    <button><StarSVG /></button>
    <button><StarSVG /></button>
    <button><StarSVG /></button>
    <button><StarHalfSVG /></button>
    <button><StarOutlineSVG /></button>
  </div>
</template>

<script>
import StarSVG from "../assets/star.svg";
import StarOutlineSVG from "../assets/star-outline.svg";
import StarHalfSVG from "../assets/star-half.svg";

export default {
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

  & > svg
    fill: #f39e1d
</style>