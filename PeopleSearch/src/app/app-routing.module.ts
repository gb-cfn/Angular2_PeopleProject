import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
 import { ShowComponent } from './show/show.component';

const routes: Routes = [
  // {path: 'show/:id', component: ShowComponent},
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'show/:id', component: ShowComponent }
];

export const PeopleProjectRoutingModule = RouterModule.forRoot(routes);
