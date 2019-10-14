import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit {

  private page_title: string;
  public film: Film;
  public result;

  constructor(
    private _filmService: FilmService
  ) {
    this.page_title = 'Films';
    this.film = new Film('','');
   }

  ngOnInit() {
  }

  onSubmit() {
    this._filmService.getFilm(this.film).subscribe(
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
