import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit{

  @Input()comments!: Comment[];
  @Output() newComment = new EventEmitter<string>
  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void { 
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
  }

  onLeaveComment() {
   this.newComment.emit(this.commentCtrl.value)
   this.commentCtrl.reset()
  } 
}
