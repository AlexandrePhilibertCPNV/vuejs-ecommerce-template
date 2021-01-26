<template>
  <div v-if="breadcrumbs && breadcrumbs.length > 0" class="header-breadcrumbs">
    <ul>
      <li class="home-breadcrumb">
        <router-link to="/"><HomeSVG /></router-link>
      </li>
      <li v-for="(breadcrumb, i) in breadcrumbs" :key="i">
        <ChevronRightSVG />
        <router-link :to="breadcrumb.link ? breadcrumb.link : pathname">{{ breadcrumb.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeSVG from "../assets/home.svg";
import ChevronRightSVG from "../assets/chevron-right.svg";

export default {
  data() {
    return {
      breadcrumbs: [],
    };
  },
  components: {
    HomeSVG,
    ChevronRightSVG,
  },
  computed: {
    pathname() {
      return window.location.pathname;
    }
  },
  mounted() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
  },
  watch: {
    $route() {
      this.breadcrumbs = this.$route.meta.breadcrumbs;
    },
  },
};
</script>

<style lang="sass" scoped>
.header-breadcrumbs
    display: flex
    justify-content: center
    padding: .5em
    border-bottom: 1px solid #d7d7d7

    & > ul
        display: flex
        align-items: center
        flex-flow: row nowrap
        max-width: 1200px
        width: 100%

        & > li
            display: flex
            align-items: center
            margin: 0 .25em

            & > a
                text-decoration: none
                color: inherit

                &:hover
                    color: #c80000
</style>