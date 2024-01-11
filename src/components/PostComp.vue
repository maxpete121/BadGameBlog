<template>
    <div class="card col-5 mt-3 p-2">
        <span class="d-flex">
            <h3 class="me-2">Posted By:</h3>
            <h3>{{ post.creator.name }}</h3>
            <router-link :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
                <img type="button" class="ms-2 profile-pic rounded-circle" :src="post.creator.picture" alt="">
            </router-link>
        </span>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Post } from '../models/Post';
import { RouterLink } from 'vue-router';
export default {
    props: { post: { type: Post, required: true } },
    setup() {
        return {};
    },
    components: { RouterLink }
};
</script>


<style scoped>
.profile-pic{
    width: 50px;
    height: 50px;
}
</style>