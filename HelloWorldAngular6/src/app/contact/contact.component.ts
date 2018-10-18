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
  putResponse;
  patchResponse;
  deleteResponse;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  testPost() {
    let postModel: PostModel =
      new PostModel("Test post", "Inhoud van de post", 1);

    this._http.post(
      "https://jsonplaceholder.typicode.com/posts",
      postModel
    )
      .subscribe(response =>
        this.postResponse = response
      );
  }

  testPut() {
    let postModel: PostModel =
      new PostModel("Test put", "Inhoud van de put", 10, 1);

    this._http.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      postModel
    )
      .subscribe(response =>
        this.putResponse = response
      );
  }

  testPatch() {
    this._http.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: 'patch title'
      }
    )
      .subscribe(response =>
        this.patchResponse = response
      );
  }

  testDelete() {
    this._http.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    )
      .subscribe(response =>
        this.deleteResponse = response
      );
  }

}
