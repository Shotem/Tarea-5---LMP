import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-cookie',
  templateUrl: './verify-cookie.component.html',
  styleUrls: ['./verify-cookie.component.css']
})
export class VerifyCookieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCookie() :string {
    return document.cookie;
  }
  
  resetCookie() : boolean {
    let today = new Date();
    let yesterday = new Date( today.setDate(today.getDate() - 1 ));
    document.cookie = "name=;SameSite=strict;expires="+ yesterday;
    return true;
  }

}
