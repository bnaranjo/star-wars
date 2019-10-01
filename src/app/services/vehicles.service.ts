import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Vehicles } from '../models/vehicles';

@Injectable()
export class VehiclesService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getVehicles(vehicles):Observable<any>{
        let  json = JSON.stringify(Vehicles);
        if (vehicles.type === 1) {
            return this._http.get(this.url+'vehicles/');
        }
        return this._http.get(this.url+'vehicles/'+'?search='+vehicles.name);
    }
}
