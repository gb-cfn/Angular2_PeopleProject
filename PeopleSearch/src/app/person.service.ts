import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import { UsersResponse } from './UsersResponse';
import 'rxjs/add/operator/map';
@Injectable()
export class PersonService {
  server = 'http://localhost:8081';
  constructor(private httpclient: HttpClient) { }

  getUsersFirstName(): Observable<any> {
    return this.httpclient.get<UsersResponse>(this.server+'/people/*').map((data) => data.people);
  }

  getPeople(term: string): Observable<any[]> {
    return this.httpclient.get<any[]>(this.server + '/people/' + term).map((data) => data);
    // Fill in this blank!!!
  }
}
