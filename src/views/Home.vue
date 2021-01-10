<template>
  <div>
    <Header />
    <Jumbotron />
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