import { api } from "./AxiosService"


class CommentService{
    async getComments(){
        let response = await api.get('api/comments')
        console.log('comments',response)
    }

    async postComment(commentData){
        let response = await api.post('api/comments')
    }
}

export const commentService = new CommentService()