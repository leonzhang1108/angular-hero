import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Bruce Wayne' },
      { id: 1, name: 'Clark Kent' },
      { id: 2, name: 'Diana Prince' },
      { id: 3, name: 'Victor Stone' },
      { id: 4, name: 'Barry Allen' },
      { id: 5, name: 'Arthur Curry' },
      { id: 6, name: 'Hal Jordan' },
      { id: 7, name: `J'onn J'onzz` },
      { id: 8, name: 'Oliver Queen' },
      { id: 9, name: 'Lex Luthor' },
      { id: 10, name: 'Darkseid' }
    ];
    return {heroes};
  }
}