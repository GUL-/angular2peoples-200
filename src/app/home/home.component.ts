import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'Angular 2';

  constructor() {
  }

  ngOnInit() {
  }

}
