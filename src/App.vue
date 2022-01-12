<template>
<div class="home-main">
<Appheader />

  <div class="home-inner">
   <router-view></router-view>
  </div>
  <Footer />
</div>
</template>

<script>
import Appheader from './components/header.vue';
import Footer from './components/footer.vue';
export default {
 components: {Appheader ,  Footer},
}
</script>

<style>

</style>