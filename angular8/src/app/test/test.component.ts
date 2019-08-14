import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-test',
  // selector: '[app-test]',
  
  selector: 'app-test',
  template: `<div>Nguyen van A</div>`,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
