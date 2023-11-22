import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: any = [
      { id: 1, name: 'Thor' },
      { id: 2, name: 'Dr Strange' },
      { id: 3, name: 'Hulk' },
      { id: 4, name: 'Iron Man' },
      { id: 5, name: 'Captain America' },
      { id: 6, name: 'Spiderman' },
      { id: 7, name: 'Hawk-Eye' },
      { id: 8, name: 'Black Widow' },
      { id: 9, name: 'Black Panther' },
      { id: 10, name: 'Captain Marvel' },
      { id: 11, name: 'The Falcon' },
      { id: 12, name: 'War Machine' },
      { id: 13, name: 'Ant Man' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (0).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}