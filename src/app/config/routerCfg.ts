import { Routes } from '@angular/router';
import { CreateComponent } from '../components/create/create.component';
import { EditComponent } from '../components/edit/edit.component';
import { IndexComponent } from '../components/index/index.component';

/**
 * Routes for the Angular app.
 * Server API routes can be found in /shared/customerRoutes.js
 */

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
];
