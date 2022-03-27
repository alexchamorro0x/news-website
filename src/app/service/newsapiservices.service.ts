import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }
  // newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  // technewsApiUrl
  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  // businessnewsApiUrl
  businessnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  // entertainmentnewsApiUrl
  entertainmentnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  //topheading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  //technews
  techNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl)
  }

  //businessnews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl)
  }

  //entertainmentnews
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentnewsApiUrl)
  }
}
