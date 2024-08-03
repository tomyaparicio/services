<template>


<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
     :src="props.image"
      cover
    ></v-img>

    <v-card-title>
        {{ props.name }}
    </v-card-title>

    <v-card-subtitle>
        <h3>Status: {{ props.status }}</h3>
    </v-card-subtitle>

    <v-card-actions>
        <v-btn class="btnclass" @click="openDialog">
        <h3>EXPLORAR</h3>
        </v-btn>

      <v-spacer></v-spacer>

     
    </v-card-actions>
  </v-card>
            <v-dialog class="dialog" v-model="dialog">
              <v-card>
                <v-card-title class="ColorPrimario">
                  <h1 class="text-center">{{ props.name }}</h1>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6">
                      <h3>Status: {{ props.status }}</h3>
                      <h3>Especie: {{ props.species }}</h3>
                      <h3>Genero: {{ props.gender }}</h3>
                      <h3>Origen: {{ props.origin.name === "unknown" ? "Desconocido": props.origin.name }} </h3>
                    </v-col>
                    <v-col cols="6">
                      <v-img cover class="img" :src="props.image" alt="Rick and Morty Character" />
                    </v-col>
                    <v-btn @click="closeDialog" class="ColorPrimario" elevation="10">Cerrar</v-btn>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
      
        
</template>

<script lang="ts" setup>
import { defineProps, ref} from 'vue';
interface Props {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    origin:{
        name: string,
    }
}

const props = defineProps<Props>()
const dialog = ref(false);

const openDialog = async () => {
  dialog.value = true;
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
    display: flex;
  text-align: center;
  height: 60px !important;
  width: 400px !important;
  background-color: burlywood;
  margin-top: 10px;
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