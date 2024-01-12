<template>
    <div class="component">
        <h1>comment</h1>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { commentService } from '../services/CommentService';
export default {
    setup(){
        onMounted(()=>{
            getComments()
        })
        
        async function getComments(){
            await commentService.getComments()
        }
    return {  }
    }
};
</script>


<style lang="scss" scoped>

</style>