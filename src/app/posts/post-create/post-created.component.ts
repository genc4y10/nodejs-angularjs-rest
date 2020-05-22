import { Component, EventEmitter, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css']
})



export class PostCreateComponent {


  constructor(public postService: PostService){}
  /* method olusturduk */
  onAddPost(form: NgForm) {

    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title , form.value.content);
    form.resetForm();
  }
}

