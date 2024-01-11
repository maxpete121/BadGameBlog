<template>
  <section class="container-fluid">
    <div class="row">
      <form @submit.prevent="postPost()" action="">
        <div>
          <label for="">Image Link:</label>
          <input v-model="postData.imgUrl" required type="text">
        </div>
        <div>
          <label for="">Title:</label>
          <input v-model="postData.title" required type="text">
        </div>
        <div>
          <label for="">Body:</label>
          <input v-model="postData.body" required type="text">
        </div>
        <button>Post</button>
      </form>
    </div>
  </section>
<section v-for="post in posts" class="container-fluid">
  <div class="row justify-content-center">
    <PostComp :post="post"/>
  </div>
</section>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import PostComp from '../components/PostComp.vue';
import { AppState } from '../AppState';
import { Post } from '../models/Post';
import {postService} from '../services/PostService.js'
export default {
  setup() {
    const postData = ref({})
    onMounted(()=>{
      getPosts()
    });
    watch(AppState.posts, ()=> {
      getPosts()
    }, {immediate: true})
    async function getPosts(){
      await postService.getPosts()
    }
    async function postPost(){
      await postService.postPost(postData.value)
    }
    return {
      posts: computed(()=> AppState.posts),
      postData,
      postPost
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
