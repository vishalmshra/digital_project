import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }
  confirm() {
    console.log('hello world');
    
    }

  ngOnInit(): void {
    this.confirm();
  }

}
