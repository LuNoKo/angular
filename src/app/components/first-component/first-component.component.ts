import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Lucas';
  age: number = 23;
  job: string = 'Programador';
  hobbies = ['Jogar', 'Estudar', 'Lutar'];
  car = {
    name: 'Clio',
    year: 2013,
  };

  constructor() {}

  ngOnInit(): void {}
}
