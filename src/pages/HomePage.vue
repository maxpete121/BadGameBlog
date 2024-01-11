<template>
<section v-for="post in posts" class="container-fluid">
  <div class="row">
    <PostComp :post="post"/>
  </div>
</section>
</template>

<script>
import { computed, onMounted } from 'vue';
import PostComp from '../components/PostComp.vue';
import { AppState } from '../AppState';
import { Post } from '../models/Post';
import {postService} from '../services/PostService.js'
export default {
  setup() {
    onMounted(()=>{
      getPosts()
    })
    async function getPosts(){
      await postService.getPosts()
    }
    return {
      posts: computed(()=> AppState.posts)
    }
  }, components: {PostComp}
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
