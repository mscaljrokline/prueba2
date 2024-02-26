import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';


import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // only accept values 2 or greater
    filter(value => value >= 2)
  )
  // log: 2, 3, 4, 5
  .subscribe(value => console.log(value));
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba2';
  ngOnInit(): void {
    initFlowbite();
  }
}
