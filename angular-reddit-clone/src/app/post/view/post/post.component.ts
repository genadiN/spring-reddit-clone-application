import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/shared/post-model';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentPayload } from 'src/app/shared/comment/comment-payload';
import { CommentService } from 'src/app/shared/comment/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: number;
  post?: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments?: CommentPayload[];
  getPostById: any;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      // postId: this.postId
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }
  getCommentsForPost() {
    throw new Error('Method not implemented.');
  }

  // postComment() {
  //   this.commentPayload.text = this.commentForm.get('text')?.value;
  //   this.commentService.postComment(this.commentPayload).subscribe((data = any) => {
  //     this.commentForm.get('text')?.setValue('');
  //     this.getCommentsForPost();
  //   }, error => {
  //     throwError(error);
  //   })
  // }

  // private getPostById() {
  //   this.postService.getPost(this.postId).subscribe(data => {
  //     this.post = data;
  //   });
  // }

  // private getCommentsForPost() {
  //   this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
  //     this.comments = data;
  //   });
  // }

}