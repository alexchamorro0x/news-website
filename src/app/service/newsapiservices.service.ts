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

  // healthnewsApiUrl
  healthnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  // sciencenewsApiUrl
  sciencenewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=0330aeb0b55c4e899e6f6655108aa339";

  // sportsnewsApiUrl
  sportsnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0330aeb0b55c4e899e6f6655108aa339";

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

  //healthnews
  healthNews():Observable<any>
  {
    return this._http.get(this.healthnewsApiUrl)
  }

  //sciencenews
  scienceNews():Observable<any>
  {
    return this._http.get(this.sciencenewsApiUrl)
  }

  //sportsnews
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsnewsApiUrl)
  }
}
