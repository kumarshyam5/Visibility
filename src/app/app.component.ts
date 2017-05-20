import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  StoreDetails:any;

  constructor(private http:Http){
    this.http.get('/src/app/sample.json')
    .map(res=>res.json())
    .subscribe(data=>this.StoreDetails=data);
  }
}
