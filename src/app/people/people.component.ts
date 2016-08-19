import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  moduleId: module.id,
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

  dialogStatus = 'inactive';
  people = [];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    this._http.get(`${BASE_URL}/api/peoples/`)
      .map( res => res.json() )
      .subscribe( people => this.people = people);
  }

  delete(person) {
    this._http.delete(`${BASE_URL}/api/peoples/${person.id}`)
      .map( res => res.json() )
      .subscribe( people => this.people = people);
  }

  showDialog() {
    this.dialogStatus = 'active';
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
  }

}
