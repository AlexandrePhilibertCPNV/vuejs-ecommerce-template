<template>
  <div class="wrapper">
      <div>
          <h1>Où est billy ?</h1>
          <p>La page à laquelle vous souhaitez accéder n'as pas été développée :(</p>
          <router-link to="/">Retour à la page d'accueil</router-link>
      </div>
  </div>
</template>

<style lang="sass" scoped>
.wrapper
    display: flex
    justify-content: center
    margin: 0 2em

    & > div
        flex: 1 1 auto
        max-width: 1200px


a 
    color: #c80000
    text-decoration: none
</style>