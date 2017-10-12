import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  private person: Person;

  constructor(private personService: PersonService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let id: number = +paramMap.get('id'); // (+) converts to number

      this.personService.getPerson(id)
        .do(person => console.log(person))
          .subscribe(person => this.person = person);
    });
  }
}

