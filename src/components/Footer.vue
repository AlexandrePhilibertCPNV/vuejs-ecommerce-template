<template>
  <footer>
    <div>
      <div class="about">
        <h1 class="logo"><span>Brico</span><span>shop</span></h1>
        <p class="footer-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non enim
          debitis ipsa suscipit placeat esse voluptatum optio.
        </p>
      </div>
      <div>
        <h3>Liens rapides</h3>
        <ul>
          <li>
            <router-link to="/">Succurcales</router-link>
          </li>
          <li>
            <router-link to="/">Contact</router-link>
          </li>
          <li>
            <router-link to="/">Protection des données</router-link>
          </li>
          <li>
            <router-link to="/">Mentions légales</router-link>
          </li>
          <li>
            <router-link to="/">Conditions générales de vente (CGV)</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Service clientèle</h3>
        <ul>
          <li>
            <router-link to="/orders">Commandes</router-link>
          </li>
          <li>
            <router-link to="/">Livraison et retraits</router-link>
          </li>
          <li>
            <router-link to="/">Tous les services</router-link>
          </li>
          <li>
            <router-link to="/">Modes de paiements</router-link>
          </li>
          <li>
            <router-link to="/">Retour et garanties</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Réseaux sociaux</h3>
        <ul>
          <li>
            <router-link to="/">Facebook</router-link>
          </li>
          <li>
            <router-link to="/">Twitter</router-link>
          </li>
          <li>
            <router-link to="/">Instagram</router-link>
          </li>
          <li>
            <router-link to="/">Pinterest</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul class="contact">
          <li>
            <PlaceSVG class="fill-red" />
            <div>Route du chateau 12, 1450 Baulmes</div>
          </li>
          <li>
            <PhoneSVG class="fill-red" />
            <div><a href="tel:+41 21 346 78 90">+41 21 346 78 90</a></div>
          </li>
          <li>
            <EmailSVG class="fill-red" />
            <div>
              <a href="mailto:contact@brioshop.ch">contact@brioshop.ch</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import PlaceSVG from "../assets/place.svg";
import PhoneSVG from "../assets/phone.svg";
import EmailSVG from "../assets/email.svg";

export default {
  components: {
    PlaceSVG,
    PhoneSVG,
    EmailSVG,
  },
};
</script>

<style lang="sass" scoped>
footer
  display: flex
  justify-content: center
  margin: 1em 0
  border-top: 1px solid #d7d7d7
  padding-top: 1em
  width: 100%

  & > div
    display: flex
    flex-direction: row
    max-width: 1200px

    & > *
      flex: 1 1

a
  text-decoration: none
  color: inherit

  &:hover
    color: #c80000

h3
  font-weight: bold
  padding: .5em
  margin: 0

ul
  padding: 0

ul > li
  padding: .5em

  & > *
    vertical-align: middle

  & > div
    display: inline-block

  & > svg
    margin: .25em

footer > div
  flex: 1 1 20%

.footer-text
  color: #7d7d7d
  text-align: justify
  padding-right: 3em

.logo
  font-weight: normal
  user-select: none
  font-family: DIRTYBAG

  & > span:last-child
    color: red

.contact li
  display: flex
  align-items: center

@media screen and (max-width: 1000px)
  .about
    display: none

@media screen and (max-width: 600px)
  footer 
    margin-left: 2em
    
    & > div 
      flex-flow: column wrap
</style>