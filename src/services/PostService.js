import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { api } from "./AxiosService"



class PostService{
    async getPosts(){
        let response = await api.get('api/blogs')
        let mappedPost = response.data.map(post => new Post(post))
        console.log(mappedPost)
        AppState.posts = mappedPost.reverse()
    }

    async postPost(postData){
        let response = await api.post(`api/blogs`, postData)
        let newPost = new Post(response.data)
        AppState.posts.push(newPost)
    }
}

export const postService = new PostService()