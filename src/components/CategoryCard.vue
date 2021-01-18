<template>
  <div class="category-card">
    <img class="img" src="https://picsum.photos/300/500" alt="" />
    <a class="link" href="">{{ category?.name }}</a>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style lang="sass" scoped>
.category-card
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding: 1em

.img
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: -1

.link
    width: max-content
    padding: .5em 1.5em
    text-decoration: none
    border: 3px solid #fff
    border-radius: .25em
    width: 100%
    text-align: center
    color: #fff
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .5)
    text-shadow: 1px 1px 10px rgba(0, 0, 0, .75)
    background-color: rgba(50, 50, 50, .25)
</style>
