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
          <ul class="post-list text-center">
            <v-btn class="btnclass" @click="openDialog">
              <v-img  contain class="button-img" s :src="imageUrl" alt="Rick and Morty Character" />
              <span>{{ posts.name }}</span>
            </v-btn>

            <v-dialog class="dialog" v-model="dialog">
              <v-card>
                <v-card-title class="ColorPrimario">
                  <h1 class="text-center">{{ posts.name }}</h1>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <h3>Status: {{ posts.status }}</h3>
                      <h3>Especie: {{ posts.species }}</h3>
                      <h3>Genero: {{ posts.gender }}</h3>
                      <h3>Location: {{ posts.location.name }}</h3>
                    </v-col>
                    <v-col cols="6">
                      <v-img contain class="img" :src="imageUrl" alt="Rick and Morty Character" />
                    </v-col>
                    <v-btn @click="closeDialog" class="ColorPrimario" elevation="10">Cerrar</v-btn>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import PostServices from '@/services/PostService'; 
import { onMounted, ref  } from 'vue';

const service = new PostServices();
const posts = service.getPost();
const imageUrl = service.getImageUrl();
const dialog = ref(false);

let simpleRick = ref({
  name: '',
  status: '',
  species: '',
  gender: '',
  location: {
    name: ''
  }
});

onMounted(async () => {
  await service.fetchAll();
  await service.ImgRick();
});

const openDialog = async () => {
  dialog.value = true;
  await service.ImgRick();
};

const closeDialog = async () => {
  dialog.value = false;
};
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
</style>