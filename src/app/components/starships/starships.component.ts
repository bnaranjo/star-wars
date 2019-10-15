import { Component, OnInit } from '@angular/core';
import { Starships } from '../../models/starships';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  providers: [StarshipsService]
})
export class StarshipsComponent implements OnInit {

  private page_title: string;
  public starships: Starships;
  public result;

  constructor(
    private _starshipsService: StarshipsService
  ) {
    this.page_title='Starships';
    this.starships = new Starships('','');
   }

  ngOnInit() {
  }

  onSubmit() {
    this._starshipsService.getStarships(this.starships).subscribe(
      response => {
        this.result = response.results;
        console.log(this.result);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
