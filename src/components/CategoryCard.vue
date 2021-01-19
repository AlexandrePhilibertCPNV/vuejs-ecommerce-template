<template>
  <router-link to="" class="category-card">
    <img class="img" src="https://picsum.photos/300/500" alt="" />
    <button class="link">{{ category?.name }}</button>
  </router-link>
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
    text-decoration: none
    padding: 1em
    overflow: hidden
    cursor: pointer

    &:hover > .img
      transform: scale(1.1)

.img
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: -1
    transition: transform 0.5s ease

.link
    width: max-content
    padding: .5em 1.5em
    border: 3px solid #fff
    border-radius: .25em
    width: 100%
    text-align: center
    color: #fff
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .5)
    text-shadow: 1px 1px 10px rgba(0, 0, 0, .75)
    background-color: rgba(50, 50, 50, .25)
    cursor: pointer
</style>
