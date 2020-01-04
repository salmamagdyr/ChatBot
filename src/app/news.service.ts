import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(public _http: HttpClient) { }
  
  getData(): Observable<any> {
  return this._http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  }
}
