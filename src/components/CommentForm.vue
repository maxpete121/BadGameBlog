<template>
    <div class="">
        <form action="">
            <label for="">Your New Comment:</label>
            <input maxlength="60" minlength="1" type="text">
            <button>Post</button>
        </form>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { commentService } from '../services/CommentService';
export default {
    setup(){
        onMounted(()=>{
            
        })
        

    return {  }
    }
};
</script>


<style lang="scss" scoped>

</style>