import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  moduleId: module.id,
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    this._http.get(`${BASE_URL}/api/peoples/`)
      .map( res => res.json() )
      .subscribe( person => this.person = person[0]);
  }

  random() {
    this._http.get(`${BASE_URL}/api/peoples/random`)
      .map( res => res.json() )
      .subscribe( person => this.person = person);
  }

}
