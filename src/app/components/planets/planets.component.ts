import { Component, OnInit } from '@angular/core';
import { Planets } from '../../models/planets';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [PlanetsService]
})
export class PlanetsComponent implements OnInit {

  private page_title: string;
  public planets: Planets;
  public result;

  constructor(
    private _planetsService: PlanetsService
  ) {
    this.page_title='Planets';
    this.planets = new Planets('','');
   }

  ngOnInit() {
  }

  onSubmit() {
    this._planetsService.getVehicles(this.planets).subscribe(
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
