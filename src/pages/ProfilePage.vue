<template>
    <section v-if="profile" class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-3">
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
        </div>

    </section>
</template>


<script>
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import {profileService} from '../services/ProfileService.js'
export default {
    setup(){
        onMounted(()=>{
            getProfileById()
        })
        const route = useRoute()
        async function getProfileById(){
            let profileID = route.params.profileId
            await profileService.getProfileById(profileID)
        }
    return { 
        profile: computed(()=> AppState.activeProfile)
     }
    }
};
</script>


<style scoped>
.img-profile{
    height: 250px;
    width: 250px;
}
.img-contained{
    height: 370px;
    border-radius: 20px;
}
</style>