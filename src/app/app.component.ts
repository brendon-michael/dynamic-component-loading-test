import { Component, OnInit } from '@angular/core';
import * as settings from './componentsToLoad.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-connect';
  componentsToLoad: string;
  ngOnInit() {
    console.log(settings.componentsToLoad[0]);
    this.componentsToLoad = settings.componentsToLoad[0];
    // this.componentsToLoad = '<app-testing> </app-testing>';
  }
}
