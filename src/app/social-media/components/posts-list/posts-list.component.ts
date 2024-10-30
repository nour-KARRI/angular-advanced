import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit{

  posts$!: Observable<Post[]>
  newPost!: Post

  constructor(private route: ActivatedRoute,
    private postsService: PostsService){}

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    )
  }

onPostCommented(postCommented: { comment: string; postId: number; }) {
  this.postsService.addNewComment(postCommented);
  }

}
