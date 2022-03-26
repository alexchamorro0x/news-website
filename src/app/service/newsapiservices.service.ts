import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }
  // newsApiUrl
  newsApiUrl = "GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY"

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }
}
