 


export class Comment{
    constructor(data){
        this.creatorId = data.creatorId
        this.blogId = data.blog 
        this.body =data.body
        this.creator = data.creator || 'none'
    }
}