<template>
<div class="connect-main">
<div class="connect-inner">
    
    <button @click="activeTab = 'Phrase'" class="btn active" >Phrase</button>
    
    <button @click="activeTab = 'Keystore'" class="btn" >Keystore JSON</button>
    
    <button @click="activeTab = 'Private'" class="btn" >Private Key</button>
    
</div>
  <div>
      <component :is="activeTab" />
  </div>
  </div>
</template>

<script>


import Phrase from "../components/phrase.vue";
import Keystore from "../components/keystore.vue";
import Private from "../components/private.vue";

export default {
    components: {
        Phrase,
        Keystore,
        Private,
    },

    data (){
        return{
            activeTab: "Phrase",
        }
    }

   
}
</script>

<style>

</style>