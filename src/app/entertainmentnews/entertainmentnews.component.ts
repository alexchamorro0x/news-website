import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  entertainmentNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result) => {
      console.log(result);
      this.entertainmentNewsDisplay = result.articles;
    })
  }

}
