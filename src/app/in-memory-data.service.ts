import { NewClass, NewStudent } from './class';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const newClass = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
    ]
    const newStudent = [
      { id: 1, name: 'Dr Nice', class_id: 1 },
      { id: 2, name: 'Narco', class_id: 2 },
    ]
    return { newClass, newStudent };
  }





  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: NewClass[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}