import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  name: string; // a: dataName: dataType

  constructor() {
    // this.name = 'Felipe'; // b: this.dataName = 'xxxx';
  }

  ngOnInit() {
  }

}
