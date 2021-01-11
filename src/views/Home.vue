<template>
  <div>
    <Header />
    <Jumbotron title="Reduction sur les articles de jardin"/>
    <section>
      <h1>Les offres actuelles</h1>
      <div></div>
    </section>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Jumbotron from '../components/Jumbotron.vue';
import Newsletter from '../components/Newsletter.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Jumbotron,
    Newsletter,
    Footer,
  },
};
</script>

<style lang="sass" scoped>
h1
  text-align: center
</style>