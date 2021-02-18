import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
    `
      li {
        margin: 12px 0;
      }
    `
  ]
})
export class BasicsComponent implements OnInit {
  public name = 'MelissA';
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
