<template>
  <section class="newsletter">
    <img class="background" src="../assets/newsletter-bg.jpg" alt="" />
    <h1>Inscrivez vous à la newsletter pour ne rien raté !</h1>
    <div class="subscribe-box">
      <div class="subscribe-input">
        <input type="email" placeholder="Entrez votre adresse email"/>
        <button><span>S'inscrire</span><SendSVG /></button>
      </div>
    </div>
  </section>
</template>

<script>
import SendSVG from "../assets/send.svg";

export default {
  components: {
    SendSVG,
  },
};
</script>

<style lang="sass" scoped>
.newsletter
    position: relative
    width: 100%
    padding: 5em 2em

.background
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    object-fit: cover
    z-index: -1

h1
    text-align: center
    font-size: 2em
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75)
    margin-top: 0
    color: #fff

.subscribe-box
    display: flex
    align-items: center
    justify-content: center

    & > .subscribe-input
        display: flex
        border-radius: .25em
        background-color: #fff
        overflow: hidden

        & > input
            width: 300px
            padding: .75em
            border: none
            background: none
            border-right: 1px solid #d7d7d7
            font-family: inherit

        & > button
            padding: .75em
            border: none
            background: none
            cursor: pointer

            &:hover 
                background-color: #efefef

            & > *
                display: inline-block
                vertical-align: middle
                margin: 0 .25em
</style>