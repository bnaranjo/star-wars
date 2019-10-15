import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Film } from '../models/film';

@Injectable()
export class FilmService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getFilm(film):Observable<any>{
        let  json = JSON.stringify(Film);
        if (film.type === 1) {
            return this._http.get(this.url+'films/');
        }
        return this._http.get(this.url+'films/'+'?search='+film.name);
    }
}

