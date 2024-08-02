<template>

 <h1 class="text-center">Listado Post</h1>
 <ul class="post-list text-center">

  <v-btn class="btnclass" @click="openDialog"> {{ posts.name }}</v-btn>


    <v-dialog  class="dialog" v-model="dialog">
      <v-card>
        <v-card-title class="ColorPrimario">
          <h1 class="text-center" >{{ posts.name }}</h1>
        </v-card-title> 
          <v-card-text >
            <v-row>

            
              <v-col cols="6">
            <h3 > Status: {{ posts.status }}</h3>
            <h3 >Especie: {{ posts.species }}</h3>
            <h3 >Genero: {{ posts.gender }}</h3>
          </v-col>
          <v-col cols="6">
            <v-img contain class="img " :src="imageUrl" alt="Rick and Morty Character" />
          </v-col>
               <v-btn  @click="closeDialog" class="ColorPrimario">Cerrar</v-btn>
              </v-row>
          </v-card-text>

       
        </v-card>
    </v-dialog>
 </ul>
</template>

<script lang="ts" setup>
import PostServices from '@/services/PostService'; 
import { onMounted, ref  } from 'vue';

// export default defineComponent({
//   name: "PostList",
//   setup () {
      const service = new PostServices();
      const posts = service.getPost()
      const imageUrl = service.getImageUrl()
      const dialog = ref(false)


      onMounted(async() => {
          await service.fetchAll()                                          
      })


      const openDialog = async() => {
        dialog.value = true
        await service.ImgRick();
      }

      const closeDialog = async() => {
        dialog.value = false
      }



    //   return {posts}
//   }
// })
  

</script>

<style scoped>
.ColorPrimario{
  background-color: rgb(0, 0, 0);
  color: white;
}
.dialog{
  width: 800px;
  height: 800px;
}

.img{
  width: 300px;
  height: 300px;
}

.cardtext{
  display: flex;
}

.btnclass{
  height: 100px !important;
  width: 600px !important;  
  background-color:beige;
  color: ;
}



</style>