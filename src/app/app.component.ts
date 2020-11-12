import { Component, Input } from '@angular/core';
import { CallAPIService} from '../services/call-api.service'
import { Person } from "../classes/Person"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-n5';
  @Input() name:string;
  people:Person[];
  cookie:string;

  constructor( private api_service: CallAPIService ) {
    this.cookie = document.cookie;
  }

  async callAPI() {
    let data = await this.api_service.call(this.name);
    this.people = data.results;
  }

  select( person: Person) {
    if ( this.setCookie( person ) ) {
      console.log(document.cookie);
    }
  }

  setCookie( person: Person ):boolean{
    let today = new Date();
    let twoDaysFromToday = new Date( today.setDate(today.getDate() + 2 ));
    document.cookie = "name="+person.name+";SameSite=strict;expires="+ twoDaysFromToday;
    this.people = [];
    return true;
  }

  resetCookie() : boolean {
    let today = new Date();
    let yesterday = new Date( today.setDate(today.getDate() - 1 ));
    document.cookie = "name=;SameSite=strict;expires="+ yesterday;
    return true;
  }

  getCookie() :string {
    return document.cookie;
  }

}
