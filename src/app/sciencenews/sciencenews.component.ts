import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  scienceNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result) => {
      console.log(result);
      this.scienceNewsDisplay = result.articles;
    });
  }

}
