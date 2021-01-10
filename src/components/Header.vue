<template>
  <header>
    <div class="top-header">
      <router-link to=""
        ><PhoneSVG /><span>contact@bricoshop.ch</span></router-link
      >
      <router-link to=""><EmailSVG /><span>+41 21 345 67 89</span></router-link>
      <router-link to=""><StoreSVG /><span>Succurcales</span></router-link>
      <div class="lang"><a href="">DE</a>|<a href="">FR</a></div>
    </div>
    <div class="middle-header">
      <h1 class="logo"><span>Brico</span><span>shop</span></h1>
      <div class="searchbar">
        <input placeholder="Rechercher" type="search" />
        <button><SearchSVG /></button>
      </div>
      <div>
        <router-link to=""><FavoriteSVG /></router-link>
        <router-link to=""><ShoppingCartSVG /></router-link>
        <router-link to=""><AccountSVG /></router-link>
      </div>
    </div>
    <div class="header-bottom">
      <ul>
        <li v-for="(category, i) in categories" :key="i">{{ category }}</li>
      </ul>
    </div>
  </header>
</template>

<script>
import PhoneSVG from "../assets/phone.svg";
import EmailSVG from "../assets/email.svg";
import StoreSVG from "../assets/store.svg";
import SearchSVG from "../assets/search.svg";
import FavoriteSVG from "../assets/favorite.svg";
import ShoppingCartSVG from "../assets/shopping-cart.svg";
import AccountSVG from "../assets/account.svg";

export default {
  components: {
    PhoneSVG,
    EmailSVG,
    StoreSVG,
    SearchSVG,
    FavoriteSVG,
    ShoppingCartSVG,
    AccountSVG,
  },
  data() {
    return {
      categories: [
        "Salles de bain & sanitaires",
        "Matériaux de construction",
        "Revêtements de sol / carrelages",
        "Quincaillerie",
        "Jardin",
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.logo
  font-size: 1.5em
  font-weight: normal
  user-select: none

  & > span:last-child
    color: red

.top-header
  display: flex
  flex-direction: row
  align-items: center

  & > a
    padding: .5em
    text-decoration: none
    color: inherit
    border-left: 1px solid #d7d7d7

    &:hover
      fill: #c80000
      color: #c80000

    & > *
      margin: 0 .25em
      vertical-align: middle

    &:last-of-type
      border-right: 1px solid #d7d7d7

.lang
  text-align: right
  flex: 1 0 auto

  & > a
    text-decoration: none
    color: inherit
    padding: .25em

    &:hover
      color: #c80000

.middle-header
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  border-top: 1px solid #d7d7d7
  border-bottom: 1px solid #d7d7d7

  & svg
    fill: #d7d7d7

.searchbar
  display: flex
  height: min-content
  background-color: #fff
  border: 1px solid #d7d7d7
  overflow: hidden

  & > input,
  & > button
    border: none
    background: none

  & > input
    width: 300px
    padding: .5em 1em
    border-right: 1px solid #d7d7d7
    font-family: inherit

  & > button
    padding: .75em
    cursor: pointer

    & svg
      fill: #d7d7d7

    &:hover
      background-color: #efefef
      outline: none

      & > *
        display: inline-block
        vertical-align: middle
        margin: 0 .25em

.header-bottom
</style>