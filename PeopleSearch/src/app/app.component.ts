import { Component } from '@angular/core';
import 'rxjs/Rx';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortColumn: string;
  people: Person[] = [];
  private reverse: boolean;

  constructor(private personService: PersonService) {
  }

  checkSearch(term: string) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.personService.getPeople(term)
        .subscribe((people: Person[]) => {
          for (const person of people) {
            person.birthDate = new Date(<string>person.birthDate);
          }
          this.people = people;
        });
    }
  }

  toggleSortOrder(column: string): void {
    if (column !== this.sortColumn) {
      this.reverse = false;
      this.sortColumn = column;
      this.people.sort((itemOne, itemTwo) =>
        (itemOne[column] < itemTwo[column]) ? -1 :
          (itemOne[column] > itemTwo[column]) ? 1 : 0
      );
    } else {
      this.reverse = !this.reverse;
      this.people.reverse();
    }
  }

  arrow(column: string) {
    if (this.sortColumn === column) {
      return this.reverse ? '▲' : '▼';
    }
  }

}
