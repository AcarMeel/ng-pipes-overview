import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  public name = 'MelissA';
  constructor() { }

  ngOnInit(): void {
  }

}
