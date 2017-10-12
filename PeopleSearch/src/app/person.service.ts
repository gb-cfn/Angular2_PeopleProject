import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable()
export class PersonService {
  server = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  getPeople(term: string): Observable<Person[]> {
    return this.httpClient.get<PersonResponse>(this.server + '/people/' + term)
      .map((data) => data.people);
      // .map(({people}) => people); // Destructure!!!
  }
}

interface PersonResponse {
  people: Person[];
}

