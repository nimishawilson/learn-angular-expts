import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";
//import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
  this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isLoading = true;
    this.postService.fetchPosts().subscribe( posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    },error => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createStorePost(postData.title, postData.content);
    
  }

  onFetchPosts() {
    // Send Http request
     this.isLoading = true;
    this.postService.fetchPosts().subscribe( posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    }, error => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts(){
    

  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  onHandleError(){
    this.error = null;
  }
}
