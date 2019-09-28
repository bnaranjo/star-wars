import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  private page_title: string;

  constructor() { 
    this.page_title='Vehicles';
  }

  ngOnInit() {
  }

}
