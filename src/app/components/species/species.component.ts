import { Component, OnInit } from '@angular/core';
import { Species } from '../../models/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  providers: [SpeciesService]
})
export class SpeciesComponent implements OnInit {

  private page_title: string;
  public species: Species;
  public result;

  constructor(
    private _speciesService: SpeciesService
  ) {
    this.page_title = 'Species';
    this.species = new Species('','');
   }

  ngOnInit() {
    
  }

  onSubmit() {
    this._speciesService.getSpecies(this.species).subscribe(
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

