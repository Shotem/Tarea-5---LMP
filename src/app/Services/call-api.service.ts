import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { request } from 'http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  constructor( private client: HttpClient ) { }

  call() {
    let url : string = "http://xkcd.com/info.0.json";
    let header = { headers: {} };
    let response = this.client.get( url, header );
    console.log(response);
    return response;
  }
}


