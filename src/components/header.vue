<template>
  <div class="header">

      <section class="first-head"><h4>WalletConnect announces v2.0!</h4></section>
      <section class="second-head">
          <span class="logo"> <router-link to="/"><img :src="logo" alt=""/></router-link>
          <span class="header-heaad">
          <a href="">Docs</a>
           <a href="">Registry</a>
           </span>
           </span>
          
        <router-link to="/connect">  <span class="connect">Connect Wallet</span></router-link>
      </section>

  </div>
</template>

<script>
    import logo from '../assets/walletconnect-banner.svg';
export default {
    
        data(){
            return{
                logo: logo,
            }
        },

        components:{
           
        }
}
</script>

<style>

</style>