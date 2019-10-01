import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../models/vehicles';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  providers: [VehiclesService]
})
export class VehiclesComponent implements OnInit {

  private page_title: string;
  public vehicles: Vehicles;
  public result;

  constructor(
    private _vehiclesService: VehiclesService
  ) {
    this.page_title = 'Vehicles';
    this.vehicles = new Vehicles('','');
   }

  ngOnInit() {
    
  }

  onSubmit() {
    this._vehiclesService.getVehicles(this.vehicles).subscribe(
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

