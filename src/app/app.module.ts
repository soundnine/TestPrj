import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestService } from './http-request.service';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleinterceptorService } from './exampleinterceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HttpRequestService, { provide: HTTP_INTERCEPTORS, useClass: ExampleinterceptorService, multi: true }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
