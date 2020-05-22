//server in sahip oldugu methodlari tanimadik

import { Post } from "./post.model";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class PostService{
  private posts: Post[]=[];
  private postUpdate = new Subject<Post[]>();
  constructor (private http: HttpClient){}


  getPost(){
    this.http.get<{message:string, posts:Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postUpdate.next([...this.posts]);
    });
  }

  getPostUpdateListener(){
    return this.postUpdate.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post={id: null,title: title,content:content};
    this.http.post<{message : String}>('http://localhost:3000/api/posts',post)
    .subscribe((responseData) =>{
      console.log(responseData.message);
      this.posts.push(post);
    this.postUpdate.next([...this.posts]);
    });
  }
}

