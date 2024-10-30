import { Comment } from "../../../core/models/comment.model";

export class Post{
    id!: number
    userId!: string
    title!: string
    createdDate!: string
    imageUrl!: string;
    content!: string;
    comments!: Comment[]
}