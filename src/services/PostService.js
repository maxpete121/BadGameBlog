import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { api } from "./AxiosService"



class PostService{
    async getPosts(){
        let response = await api.get('api/blogs')
        let mappedPost = response.data.map(post => new Post(post))
        console.log(mappedPost)
        AppState.posts = mappedPost
    }

    async postPost(postData){
        let response = await api.post(`api/blogs`, postData)
        let newPost = new Post(response.data)
        AppState.posts.push(newPost)
    }

    async deletePost(postId){
        let response = await api.delete(`api/blogs/${postId}`)
        let postIndex = AppState.posts.findIndex(post => post.id == postId)
        AppState.posts.splice(postIndex, 1)
    }
}

export const postService = new PostService()