import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { People } from '../models/people';

@Injectable()
export class PeopleService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getPeople(people):Observable<any>{
        let  json = JSON.stringify(People);
        if (people.type === 1) {
            return this._http.get(this.url+'people/');
        }
        return this._http.get(this.url+'people/'+'?search='+people.name);
    }
}

