import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  private page_title: string;

  constructor() {
    this.page_title='Species'
   }

  ngOnInit() {
  }

}
