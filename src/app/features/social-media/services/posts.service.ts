import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "../../../../environments/environment.development";

@Injectable()
export class PostsService{
    constructor(private http: HttpClient){}

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`)
    }

    addNewComment(postCommented: { comment: string; postId: number; }): void {
      
    }


}