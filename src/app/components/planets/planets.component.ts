import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  private page_title: string;

  constructor() {
    this.page_title='Planets';
   }

  ngOnInit() {
  }

}
