import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  private page_title: string;

  constructor() {
    this.page_title='Starships';
   }

  ngOnInit() {
  }

}
