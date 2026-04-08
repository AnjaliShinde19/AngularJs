import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PostJsonAPI, PostDataModel } from '../post-json-api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-http-client-demo',
  standalone: true, // Use standalone components as a modern approach
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './http-client-demo.html',
  styleUrl: './http-client-demo.css',
})
export class HttpClientDemo {
  alertclass: string = "";
  statusMsg: string = "";
  submitted = false;
  addUpdateBtn = "Create";

  // Use static: false for dynamically rendered elements
  @ViewChild('closeModal', { static: false }) closeModal!: ElementRef;
  @ViewChild('btnAddPost', { static: false }) btnAddPost!: ElementRef;

  postform = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  get f() { return this.postform.controls; }

  // Inject service
  private apiSvc = inject(PostJsonAPI);

  //-----------------------------------------------------------------------------
  // 1. Initialize BehaviorSubject with initial value
  private PostItems = new BehaviorSubject<PostDataModel[]>([]);

  // 2. Expose as Observable for components
  public posts$ = this.PostItems.asObservable();

  constructor(private http: HttpClient) {
    // 3. Subscribe to source and update BehaviorSubject
    this.http.get<PostDataModel[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.PostItems.next(data);
    });
  }
  //-----------------------------------------------------------------------------

  // Method to handle form submission
  onSubmit(): void {
    this.submitted = true;

    if (this.postform.valid) {
      if (this.postform.get('id')?.value == '') {
        this.addNewPost();
      }
      else {
        this.updateExistingPost();
      }
    }
    else {
      console.log('Form is invalid');
    }
  }

  // *** Add new Post
  addNewPost() {
    // Programmatically click the close button
    this.closeModal.nativeElement.click();

    this.apiSvc.createPost(this.postform.value).subscribe({
      next: (response) => {
        //----------------------------------------------------------------------------
        // Get the current array value
        const currentItems = this.PostItems.getValue();

        // Create a new array with the new item added (immutability)
        const updatedItems = [...currentItems, response];

        // Emit the new array to all subscribers
        this.PostItems.next(updatedItems);
        //----------------------------------------------------------------------------

        this.statusMsg = "Post Added successfully";
        this.alertclass = "success";
        this.ClearFormControls();
      },
      error: (error: HttpErrorResponse) => {
        this.statusMsg = "Failed. " + error.message;
      },
      complete: () => { }
    });
  }

  // *** Edit Post
  editPost(id: number) {
    this.apiSvc.getPostById(id).subscribe({
      next: (response) => {
        this.postform.setValue({
          id: String(response.id),
          userId: String(response.userId),
          title: response.title,
          body: response.body
        });

        this.addUpdateBtn = "Update";
        // Programmatically click the Add Post button
        this.btnAddPost.nativeElement.click();
      },
      error: (error: HttpErrorResponse) => {
        this.statusMsg = "Failed. " + error.message;
      },
      complete: () => { }
    });
  }

  // *** Update Post
  updateExistingPost() {
    // Programmatically click the close button
    this.closeModal.nativeElement.click();

    this.apiSvc.updatePost(this.postform.get('id')?.value, this.postform.value).subscribe({
      next: (response) => {
        //----------------------------------------------------------------------------
        // Get the current array value
        const currentItems = this.PostItems.getValue();

        // Create new array reference with updated item
        const newProducts = currentItems.map(p =>
          p.id === response.id ? response : p
        );
        this.PostItems.next(newProducts); // Emit new array to all subscribers
        //----------------------------------------------------------------------------
        this.statusMsg = "Post Updated successfully";
        this.alertclass = "success";
        this.ClearFormControls();
      },
      error: (error: HttpErrorResponse) => {
        this.statusMsg = "Failed. " + error.message;
      },
      complete: () => { }
    });
  }

  // Clear form controls after Create and Update
  ClearFormControls() {
    this.postform.setValue({ id: "", userId: "", title: "", body: "" });
    this.addUpdateBtn = "Create";
  }

  // *** Delete Post
  deletePost(id: number) {
    const isConfirmed = confirm('Are you sure you want to delete this post?');
    if (isConfirmed) {
      this.apiSvc.deletePost(id).subscribe({
        next: () => {
          // Filter out the item and emit a new array
          const updatedData = this.PostItems.value.filter(item => item.id !== id);
          this.PostItems.next(updatedData);

          this.statusMsg = "Post deleted successfully";
          this.alertclass = "success";
        },
        error: (error: HttpErrorResponse) => {
          console.error('An error occurred:', error.message);
          this.statusMsg = "Failed. " + error.message;
        },
        complete: () => {
          console.log('Request complete.');
        }
      });
    }
  }
}
