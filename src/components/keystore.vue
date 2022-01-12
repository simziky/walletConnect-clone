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

    

}

</script>

<style>

</style>