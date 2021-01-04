<template>
  <header>
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div class="lang"><a href="">DE</a>|<a href="">FR</a></div>
    </div>
    <div>
      <img class="logo" src="" alt="" />
      <div>
        <input placeholder="Rechercher" type="search" />
      </div>
      <div>
        <button><img src="" alt="" /></button>
        <button><img src="" alt="" /></button>
        <button><img src="" alt="" /></button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(category, i) in categories" :key="i">{{category}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
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
</style>