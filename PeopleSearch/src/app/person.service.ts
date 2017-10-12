import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable()
export class PersonService {
  server = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  getPeople(term: string): Observable<Person[]> {
    return this.httpClient.get<PeopleResponse>(this.server + '/people/' + term)
      .map((data) => data.people);
      // .map(({people}) => people); // Destructure!!!
  }
  getPerson(term: number): Observable<Person> {
    return this.httpClient.get<PersonResponse>(this.server + '/person/' + term)
      .map((data) => data.person);
    // .map(({people}) => people); // Destructure!!!
  }
}

interface PersonResponse {
  person: Person;
}

interface PeopleResponse {
  people: Person[];
}

