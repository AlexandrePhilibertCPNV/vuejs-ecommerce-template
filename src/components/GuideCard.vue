<template>
    <article class="guide">
        <img class="img" src="https://picsum.photos/500/300" alt="">
        <h1 class="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <a class="button" href="">Accéder</a>
    </article>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.guide
    padding: 1em

.img
    width: 100%

.title
    text-transform: uppercase
    color: #fff

.button
    color: #fff
    padding: .5em 1.5em
    text-decoration: none
    cursor: pointer
    background-color: #c87800
    border-radius: .25em

    &:hover
        background-color: #de8908
</style>