import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  urlBase = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private httpClient: HttpClient) { }

  pegar(url: any): Observable<any> {
    return this.httpClient.get(this.urlBase+url)
  }
}
