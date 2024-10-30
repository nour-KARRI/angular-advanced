import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrl: './posts-list-item.component.scss'
})
export class PostsListItemComponent implements OnInit{

@Output() newComment = new EventEmitter<{comment: string, postId: number}>
comment!: {comment: string, postId: number};
@Input() post!: Post;
userName = {lastName: 'Karri', firstName: 'Noureddine'};


ngOnInit(): void {
}
  
onNewComment(event: string) {
  this.comment = {
    comment: event,
    postId: this.post.id
  }

  this.newComment.emit(this.comment)
}
}
