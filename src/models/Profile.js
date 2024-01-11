


export class Profile{
    constructor(data){
        this.bio = data.bio
        this.coverImg = data.coverImg
        this.id = data._id
        this.name = data.name
        this.github = data.github
        this.picture = data.picture
        this.subs = data.subs 
    }
}