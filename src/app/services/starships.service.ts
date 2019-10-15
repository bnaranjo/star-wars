import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Starships } from '../models/starships';

@Injectable()
export class StarshipsService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getStarships(starships):Observable<any>{
        let  json = JSON.stringify(Starships);
        if (starships.type === 1) {
            return this._http.get(this.url+'starships/');
        }
        return this._http.get(this.url+'starships/'+'?search='+starships.name);
    }
}

