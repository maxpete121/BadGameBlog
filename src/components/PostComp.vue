<template>
    <div class="component">
        <h1>Post Title</h1>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Post } from '../models/Post';
export default {
    props: {post: {type: Post, required: true}},
    setup(){
    return {  }
    }, 
};
</script>


<style scoped>

</style>