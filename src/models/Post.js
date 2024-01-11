


export class Post{
    constructor(data){
        this.id = data._id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}