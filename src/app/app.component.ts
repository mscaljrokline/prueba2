import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';

// Creamos un observable que emite un valor cada segundo
const observable = new Observable<number>(subscriber => {
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // Cuando el observable se completa (por ejemplo, cuando dejamos de suscribirnos a él)
  // limpiamos el intervalo para evitar fugas de memoria
  return () => {
    clearInterval(intervalId);
  };
});

// Nos suscribimos al observable para recibir los valores
const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Observable completado');
  },
});

// Después de 5 segundos dejamos de suscribirnos al observable
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);


/*

//este tambien da 
import { Observable } from 'rxjs';
// Creamos un observable que emite strings
const observable = new Observable<string>(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// Nos suscribimos al observable para recibir los strings
observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Observable completado');
  },
});
*/
/*
//si da
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
  */
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
