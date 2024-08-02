import {ref} from 'vue'

class PostServices {
    private posts 
    private imageUrl
   constructor() {
            this.posts = ref([])
            this.imageUrl = ref('')
    }
    getPost () {
        return this.posts
    }
    getImageUrl () {
        return this.imageUrl
    }
    async fetchAll() {   
        try {
            const url = "https://rickandmortyapi.com/api/character/322"
            const response =  await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
        }
    }

    async ImgRick () {
        try {
            const url = "https://rickandmortyapi.com/api/character/avatar/322.jpeg"
            const response =  await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              this.imageUrl.value = url;
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostServices