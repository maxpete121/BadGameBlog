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
}

export const postService = new PostService()