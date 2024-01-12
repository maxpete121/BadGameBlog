import { api } from "./AxiosService"


class CommentService{
    async getComments(){
        let response = await api.get('api/comments')
        console.log('comments',response)
    }
}

export const commentService = new CommentService()