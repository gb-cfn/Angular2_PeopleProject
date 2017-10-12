/* tslint:disable:no-unused-variable */
  // tslint:disable-next-line:prefer-const
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {GenderPipe} from './gender.pipe';

describe('App: PeopleProject', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GenderPipe

      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should create the app', async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have the people array defined`, async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    expect(app.people).toBeDefined();
  }));

});
describe('Pipe: Gender', () => {
let pipe:GenderPipe
  beforeEach(() => {
    pipe = new GenderPipe();
  });
 it('create an instance', () => {
   expect(pipe).toBeTruthy();
 });

 it('converts F to Female', () => {
  expect(pipe.transform('F')).toBe('Female');
 });

 it('converts M to Male', () => {
   expect(pipe.transform('M')).toBe('Male');
 });

 it('converts X to Unknown', () => {
   expect(pipe.transform('X')).toBe('unknown');
 });
});
