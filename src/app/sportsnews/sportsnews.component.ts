import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  sportsNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result) => {
      console.log(result);
      this.sportsNewsDisplay = result.articles;
    });
  }

}
