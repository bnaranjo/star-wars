import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Planets} from '../models/planets';

@Injectable()
export class PlanetsService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getVehicles(planets):Observable<any>{
        let  json = JSON.stringify(Planets);
        if (planets.type === 1) {
            return this._http.get(this.url+'planets/');
        }
        return this._http.get(this.url+'planets/'+'?search='+planets.name);
    }
}
