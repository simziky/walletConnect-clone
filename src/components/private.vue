<template>
  <div class="private-form">
      <form action="" method=""  @submit.prevent="submit">

         <input v-model="form.private" type="text" placeholder="Private Key" class="input">
          <p>Typically 12 (sometimes 24) words separated by single spaces</p>
          <input type="submit" value="Import" class="submit">

      </form>
  </div>
</template>

<script>

export default {
    name:"private",

    data (){
        return{
           form : {
               private: '',
               
           }
        }
    },

  

}

</script>


<style>

</style>