import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private page_title: string;

  constructor() {
    this.page_title='People';
   }

  ngOnInit() {
  }

}
