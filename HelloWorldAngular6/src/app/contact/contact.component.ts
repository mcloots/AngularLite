import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './models/post.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  postResponse;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  testPost() {
    let postModel: PostModel = new PostModel("Test post","Inhoud van de post");

    this._http.post(
      "https://jsonplaceholder.typicode.com/posts",
      postModel
      ).subscribe(response => this.postResponse = response);
  }

}
