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
      <a href="/" class="logo-link">
        <h1 class="logo"><span>Brico</span><span>shop</span></h1></a
      >
      <div class="searchbar">
        <input placeholder="Rechercher" type="search" />
        <button><SearchSVG /></button>
      </div>
      <div class="actions">
        <router-link data-badge="3" to=""><FavoriteSVG /></router-link>
        <router-link data-badge="10" to="/cart"
          ><ShoppingCartSVG
        /></router-link>
        <router-link class="account" to=""><AccountSVG /></router-link>
      </div>
    </div>
    <div class="header-bottom">
      <ul class="categories">
        <li class="category" v-for="(category, i) in categories" :key="i">
          <router-link :to="'/category/' + category.id">
            <span>{{ category.name }}</span
            ><ExpandMoreSVG />
          </router-link>
          <ul class="sub-categories">
            <li
              class="sub-category"
              v-for="(subcategory, j) in category.subcategories"
              :key="j"
            >
              <router-link :to="'/category/' + subcategory.id">
                {{ subcategory.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Breadcrumb />
  </header>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';

import PhoneSVG from "../assets/phone.svg";
import EmailSVG from "../assets/email.svg";
import StoreSVG from "../assets/store.svg";
import SearchSVG from "../assets/search.svg";
import FavoriteSVG from "../assets/favorite.svg";
import ShoppingCartSVG from "../assets/shopping-cart.svg";
import AccountSVG from "../assets/account.svg";
import ExpandMoreSVG from "../assets/expand-more.svg";

import categories from "../data/categories.json";

export default {
  components: {
    Breadcrumb,
    PhoneSVG,
    EmailSVG,
    StoreSVG,
    SearchSVG,
    FavoriteSVG,
    ShoppingCartSVG,
    AccountSVG,
    ExpandMoreSVG,
  },
  data() {
    return {
      categories,
    };
  },

};
</script>

<style lang="sass" scoped>
.logo-link
  text-decoration: none

.logo
  font-size: 1.5em
  font-weight: normal
  user-select: none
  font-family: DIRTYBAG
  color: #000

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

.actions
  display: flex
  flex-direction: row
  align-items: center

  & > a
    position: relative
    padding: .25em .5em
    margin: 0 .25em
    text-decoration: none
    font-size: .8em
    width: 3em

    &[data-badge]:after
      position: absolute
      user-select: none
      padding: 0 .33em
      border-radius: .5em
      top: 0
      right: 0
      content: attr(data-badge)
      background-color: #c80000
      color: #fff

a.account
  width: 4em
  height: 4em

.header-bottom
  display: flex
  justify-content: center
  border-bottom: 1px solid #d7d7d7

.categories
  display: flex
  width: max-content
  flex-direction: row
  justify-content: space-between

  & > .category
    position: relative
    padding: .5em

    &:hover .sub-categories
      display: block

    & > a
      text-decoration: none
      color: inherit

      &:hover
        fill: #c80000
        color: #c80000

      & > *
        vertical-align: middle

.sub-categories
  display: none
  position: absolute
  background-color: #fff
  padding: .5em
  font-size: .9em
  z-index: 10
  box-shadow: 1px 1px 4px rgba(40, 40, 40, 0.2)

  & > .sub-category
    padding: .5em

    & > a
      text-decoration: none
      color: #000

      &:hover
        color: #c80000
</style>