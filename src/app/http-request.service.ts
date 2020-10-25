import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  
  constructor(private http:HttpClient) { }

  get(){
   const headers = new HttpHeaders().set("bro","foo bar");
   const getReq = this.http
   .get('http://localhost:8080/replies/getList/freeBoard/55/1',{headers:headers});
   getReq.subscribe(console.log);
  };

  delete = () => {
    let delReq = this.http
   .delete('http://localhost:8080/replies/getList/freeBoard/55/1');
   delReq.subscribe(console.log);
  }

  post(){
    const bodyObj = {
      "idx":"100",
      "freeBoardIdx":"55",
      "reply":"abcdefg",
      "replyWriter":"test122"
    }
    const postReq = this.http
    .post('http://localhost:8080/replies/register',bodyObj);
    postReq.subscribe(console.log);
  };





  put:() => {};
  petch:() => {};
}
