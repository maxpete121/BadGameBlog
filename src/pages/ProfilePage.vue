<template>
    <section v-if="profile" class="container-fluid">
        <div class="row justify-content-center text-center">
            <div class="col-3 m-2">
                <img class="img-profile rounded-circle" :src="profile.picture" alt="NO PICTURE!!!!">
            </div>
            <div class="row justify-content-center">
                <div class="col-5">
                    <img class=" img-contained" :src="profile.coverImg" alt="NO PIC">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-3">
                    <h3>{{ profile.name }}</h3>
                </div>
                <div class="col-3">
                    <h3>{{ profile.github }}</h3>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6">
                    <h6>{{ profile.bio }}</h6>
                </div>
            </div>
        </div>

        <div class="row justify-content-center" v-for="post in posts">
            <PostComp :post="post" />
        </div>


    </section>
</template>


<script>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { profileService } from '../services/ProfileService.js'
import { postService } from '../services/PostService';
import PostComp from '../components/PostComp.vue';
export default {
    setup() {
        onMounted(() => {
            getProfileById()
        })
        const route = useRoute()
        async function getProfileById() {
            let profileID = route.params.profileId
            await profileService.getProfileById(profileID)
            getUserPost(profileID)
        }

        async function getUserPost(profileId) {
            await postService.getPosts()
            let userPost = AppState.posts.filter(post => post.creatorId == profileId)
            AppState.usersPosts = userPost
        }
        return {
            profile: computed(() => AppState.activeProfile),
            posts: computed(() => AppState.usersPosts)
        }
    }, components: { PostComp }
};
</script>


<style scoped>
.img-profile {
    height: 250px;
    width: 250px;
}

.img-contained {
    height: 370px;
    border-radius: 20px;
}
</style>