<template>
  <footer>
    <div>
      <h1 class="logo"><span>Brico</span><span>shop</span></h1>
      <p class="footer-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non enim
        debitis ipsa suscipit placeat esse voluptatum optio voluptates
        reprehenderit maxime atque et eveniet quisquam corporis sapiente sed
        veritatis, doloribus cupiditate.
      </p>
    </div>
    <div>
      <h3>Liens rapides</h3>
      <ul>
        <li>
          <router-link to="">Succurcales</router-link>
        </li>
        <li>
          <router-link to="">Contact</router-link>
        </li>
        <li>
          <router-link to="">Protection des données</router-link>
        </li>
        <li>
          <router-link to="">Mentions légales</router-link>
        </li>
        <li>
          <router-link to="">Conditions générales de vente (CGV)</router-link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Service clientèle</h3>
      <ul>
        <li>
          <router-link to="">Commandes</router-link>
        </li>
        <li>
          <router-link to="">Livraison et retraits</router-link>
        </li>
        <li>
          <router-link to="">Tous les services</router-link>
        </li>
        <li>
          <router-link to="">Modes de paiements</router-link>
        </li>
        <li>
          <router-link to="">Retour et garanties</router-link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Réseaux sociaux</h3>
      <ul>
        <li>
          <router-link to="">Facebook</router-link>
        </li>
        <li>
          <router-link to="">Twitter</router-link>
        </li>
        <li>
          <router-link to="">Instagram</router-link>
        </li>
        <li>
          <router-link to="">Pinterest</router-link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li>
          <PlaceSVG /><span>Route du chateau, 1450 Baulmes</span>
        </li>
        <li><img src="" alt="" /><span>+41 21 346 78 90</span></li>
        <li><img src="" alt="" /><span>contact@brioshop.ch</span></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  components: {

  }
};
</script>

<style lang="sass" scoped>
footer
  display: flex
  flex-direction: row
  padding: 0 10em

a
  text-decoration: none
  color: inherit

h3
  font-weight: bold
  padding: .5em
  margin: 0

ul
  padding: 0

ul > li
  padding: .5em

footer > div
  flex: 1 1 20%

.footer-text
  color: #7d7d7d

.logo
  font-weight: normal
  user-select: none

  & > span:last-child
    color: red
</style>