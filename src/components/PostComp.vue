<template>
    <div class="card col-6 mt-3 p-2 d-flex flex-row">
        <div class="">
            <img class="post-pic" :src="post.imgUrl" alt="Image Error">
        </div>
        <div class="ms-3">
            <span class="d-flex">
                <h3 class="me-2">Posted By:</h3>
                <h3>{{ post.creator.name }}</h3>
                <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
                    <img type="button" class="ms-2 profile-pic rounded-circle" :src="post.creator.picture" alt="">
                </router-link>
            </span>
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
            <span>
                <button class="btn btn-outline-dark me-2">Comments</button>
                <button class="btn btn-outline-dark" @click="deletePost(post.id)" v-if="post.creatorId == accountId">Delete</button>
            </span>
            <CommentForm/>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Post } from '../models/Post';
import { RouterLink } from 'vue-router';
import { postService } from '../services/PostService';
import CommentForm from './CommentForm.vue';
import { commentService } from '../services/CommentService';
export default {
    props: { post: { type: Post, required: true } },
    setup() {

        async function getComments(){
            await commentService.getComments()
        }

        async function deletePost(postId){
            await postService.deletePost(postId)
        }
        return {
            deletePost,
            accountId: computed(()=> AppState.account.id)
        };
    },
    components: { RouterLink, CommentForm }
};
</script>


<style scoped>
.post-pic{
    width: 200px;
    height: 200px;
    border-radius: 10px;
}
.profile-pic{
    width: 50px;
    height: 50px;
}
</style>