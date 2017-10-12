import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // For methods for Observables
import { PersonService } from './person.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  server = 'http://localhost:8081';
  people = [];
  sortColumn: string;
  sortColumnDirection: string;
  constructor(private https: Http) {
  }

  checkSearch(term: string) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.https.get(this.server + '/people/' + term)
        .map((res) => res.json())
        .subscribe((response) => {
          this.people = response.people;
        });
    }
  }
  toggleSortOrder(column: string) {
    if (column !== this.sortColumn || this.sortColumnDirection !== 'asc') {
      this.sortColumn = column;
      this.sortColumnDirection = 'asc';
      if (column === 'birthDate') {
        this.people.sort((a, b) => this.dateSortElements(a, b));
      }
      else{
        this.people.sort((a, b) => { return this.alphaSortElements(a, b) });
      }
    } else {
      this.sortColumn = column;
      this.sortColumnDirection = 'dsc';
      if (column === 'birthDate') {
        this.people.sort((a, b) => this.dateSortElements(b, a));
      }
      else {
        this.people.sort((a, b) => this.alphaSortElements(b, a));
      }
    }
  }
  alphaSortElements(a: any, b: any) {

    const itemOne = a[this.sortColumn];
    const itemTwo = b[this.sortColumn];

    if (itemOne < itemTwo) {
      return -1;
    } else if (itemOne > itemTwo) {
      return 1;
    } else {
      return 0;
    }
  }
  dateSortElements(a: any, b: any) {

    const aDate = new Date(a[this.sortColumn]);
    const bDate = new Date(b[this.sortColumn]);

    if ((aDate) < (bDate)) {
      return 1;
    }

    else if ((aDate) > (bDate)) {
      return -1;
    }
    else if (aDate.getTime() === bDate.getTime()) {
      return 0;
    }
    else {
      return 0;
    }
  }
}
