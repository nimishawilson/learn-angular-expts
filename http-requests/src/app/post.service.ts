import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "./post.model";
import { map, catchError } from "rxjs/operators";
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'

})
export class PostService {
  error = new Subject<string>();

     constructor(private http: HttpClient) {}

createStorePost(title: string, content: string){
    const postData : Post = {title: title, content: content};
this.http
      .post<{ name: string }>(
        'https://testapp-7833f.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
      console.log(postData)
}

fetchPosts(){
   return this.http.get('https://testapp-7833f.firebaseio.com/posts.json')
    .pipe(map( (responseData: {[key: string] : Post}) => {
      const postsArray: Post[] = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key });
        }
      }
      return postsArray;
    }),
    catchError(errorRes => {
     return throwError(errorRes);
    })
    );
    
}

deletePosts(){
  return this.http.delete('https://testapp-7833f.firebaseio.com/posts.json')
}


}