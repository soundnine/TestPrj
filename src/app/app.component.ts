import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TestPrj';

  constructor(private service : HttpRequestService){

  }
  ngOnInit(){
    this.service.get();
   
  }
}
