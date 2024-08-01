<template>
 <h1>Listado Post</h1>
 <ul class="post-list">
    <li v-for="post in posts" v-bind:key="post.id">{{ post.title }}</li>
 </ul>
</template>

<script lang="ts" setup>
import PostServices from '@/services/PostService'; 
import { defineComponent, onMounted } from 'vue';

// export default defineComponent({
//   name: "PostList",
//   setup () {
      const service = new PostServices();
      const posts = service.getPost()

      onMounted(async() => {
          await service.fetchAll()
      })
    //   return {posts}
//   }
// })
  

</script>

<style scoped>



</style>