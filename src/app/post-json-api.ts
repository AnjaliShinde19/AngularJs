import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface PostDataModel {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostJsonAPI {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // GET all posts
  getPosts(): Observable<PostDataModel[]> {
    return this.http.get<PostDataModel[]>(this.apiUrl);
  }

  // POST - Create new post
  createPost(post: any): Observable<PostDataModel> {
    return this.http.post<PostDataModel>(this.apiUrl, post);
  }

  // GET post by Id
  getPostById(id: number): Observable<PostDataModel> {
    return this.http.get<PostDataModel>(`${this.apiUrl}/${id}`);
  }

  // PUT - Update post
  updatePost(id: number | string | null | undefined, post: any): Observable<PostDataModel> {
    return this.http.put<PostDataModel>(`${this.apiUrl}/${id}`, post);
  }

  // DELETE - Remove post
  deletePost(id: number): Observable<PostDataModel> {
    return this.http.delete<PostDataModel>(`${this.apiUrl}/${id}`);
  }
}
