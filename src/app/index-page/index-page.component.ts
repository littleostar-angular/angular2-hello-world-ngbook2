import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  title = 'angular2-hello-world-ngbook2';

  routeList: Array<string>;

  constructor() {
    this.routeList = ['hello-world', 'user-item', 'user-list'];
  }

  ngOnInit() {
  }

}
