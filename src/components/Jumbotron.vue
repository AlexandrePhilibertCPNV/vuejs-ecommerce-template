<template>
  <div class="jumbotron">
    <img class="bg-image" src="../assets/jumbotron.jpg" alt="" />
    <div class="container">
      <h1 class="title">{{title}}</h1>
      <div class="bottom">
        <div class="discount">20%</div>
        <div class="date"><span>Jusqu'au</span><time>31 Janvier 2020</time></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ],
};
</script>

<style lang="sass" scoped>
.jumbotron
  position: relative
  display: flex
  flex-direction: column
  height: 350px

.bg-image
  position: absolute
  width: 100%
  height: 100%
  object-fit: cover
  z-index: -1

.container
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 2em
  flex: 1 0 100%

.title
  margin: 0
  font-family: DIRTYBAG
  text-shadow: 1px 1px 10px rgba(250, 250, 2580, 0.6)

.bottom
  display: flex
  flex-direction: column
  align-items: flex-end
  text-align: right

.discount
  background-color: #c80000
  width: max-content
  padding: 1em
  font-weight: bold
  color: #fff
    
.date
  padding: 1em
  font-size: 1.33em
  font-weight: bold
  background-color: rgba(20, 20, 20, 0.4)
  color: #fff
  margin-top: 1em

  & > *
    display: block

</style>