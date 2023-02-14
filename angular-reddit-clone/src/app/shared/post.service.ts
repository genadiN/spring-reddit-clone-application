import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './post-model';
import { CreatePostPayload } from '../post/create-post/create-post-payloads';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  createPost(postPayload: CreatePostPayload) {
    throw new Error('Method not implemented.');
  }
  getAllPostsByUser(name: string) {
    throw new Error('Method not implemented.');
  }
  getPost(postId: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }
}