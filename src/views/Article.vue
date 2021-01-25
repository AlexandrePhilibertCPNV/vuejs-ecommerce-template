<template>
  <div class="container">
    <div>
        <div class="left-container">
            <img src="" alt="">
            <div>
                <button><ChevronLeftSVG /></button>
                <div class="image-scoller">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <button><ChevronRightSVG /></button>
            </div>
        </div>
        <div class="right-container">
             <h1>Whirlpool Samba avec inverseur de couleur blanc</h1>
            <div><Rating rating="4.5"/><div>12 évaluations</div></div>
            <div class="price"><span class="currency">CHF</span>1399.95</div>
            <hr>
            <div class="article-actions">
                <QuantityPicker />
                <button class="cart-button">Ajouter au panier</button>
                <button><FavoriteSVG /></button>
            </div>
            <div class="code">Art. 98745334</div>
            <div class="description"></div>
            <hr>
        </div>
    </div>
    <div class="tabs-container">
      <div class="tab-menu">
        <button class="tab-menu-button">Description</button>
        <button class="tab-menu-button">Avis</button>
      </div>
      <div class="tab-container">
        <div>
          <h1>Spécifications principales</h1>
          <div>
            <div>
              <div>Numéro d'article</div>
              <div>630774500000</div>
            </div>
            <div>
              <div>Type de traction</div>
              <div>Essence</div>
            </div>
            <div>
              <div>Moteur</div>
              <div>T375 OHV</div>
            </div>
            <div>
              <div>Rendement</div>
              <div>1200 cm²</div>
            </div>
            <div>
              <div>Cylindrée</div>
              <div>123 cm³</div>
            </div>
          </div>
        </div>
        <div>
          <h1>Les avis</h1>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '../components/Rating.vue';
import QuantityPicker from '../components/QuantityPicker.vue';

import ChevronLeftSVG from '../assets/chevron-left.svg';
import ChevronRightSVG from '../assets/chevron-right.svg';
import FavoriteSVG from '../assets/favorite.svg';

export default {
    components: {
        Rating,
        QuantityPicker,
        ChevronLeftSVG,
        ChevronRightSVG,
        FavoriteSVG,
    }
};
</script>

<style lang="sass" scoped>
</style>