import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Species } from '../models/species';

@Injectable()
export class SpeciesService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getSpecies(species):Observable<any>{
        let  json = JSON.stringify(Species);
        if (species.type === 1) {
            return this._http.get(this.url+'species/');
        }
        return this._http.get(this.url+'species/'+'?search='+species.name);
    }
}
