<template>
  <v-container>
    <v-col>
      <v-card>
        <v-card-title class="container">
          <h1 class="text-center titile">Rick and Morty API</h1>
        </v-card-title>
        <v-card-text class="text-center">
          <v-card-title>
            <h3>Listado de Personajes</h3>
          </v-card-title>
          <ul class="postlist text-center" >
            <CharacterDrawer  
            v-for="character in characters" 
            :key="character.id" 
            :name="character.name"
            :status="character.status"
            :species="character.species"
            :gender="character.gender"
            :image="character.image"
            :origin="character.origin"
            :id="character.id"
             />
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import CharacterDrawer from './CharacterDrawer.vue';
import PostServices from '@/services/PostService'; 
import { onMounted } from 'vue';

interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    origin:{
      name:string,
    }
}
const service = new PostServices();
const characters = service.getPost() as unknown as Character[];




onMounted(async () => {
  await service.fetchAll();
  await service.ImgRick();
});


</script>

<style scoped>
.ColorPrimario {
  background-color: rgb(0, 0, 0);
  color: white;
}

.dialog {
  width: 800px;
  height: 800px;
}

.img {
  width: 300px;
  height: 300px;
}

.btnclass {
  height: 60px !important;
  width: 400px !important;
  background-color: burlywood;
  align-items: center;
  justify-content: center;
}

.button-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.titile {
  color: white;
}

.container {
  background-color: rgb(0, 0, 0);
}
.postlist{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}
</style>