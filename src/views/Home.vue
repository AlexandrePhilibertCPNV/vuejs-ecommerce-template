<template>
  <div>
    <Header />
    <Jumbotron />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Jumbotron,
    Footer,
  },
};
</script>