import { Routes } from '@angular/router';

import { LoginComponent } from './Component/login/login.component';
import { TasllistComponent } from './Component/tasllist/tasllist.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutComponent } from './Component/layout/layout/layout.component';

export const routes: Routes = [

  // Default Redirect
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login Page
  {
    path: 'login',
    component: LoginComponent
  },

  // Main Layout
  {
    path: '',
    component: LayoutComponent,

    children: [

      {
        path: 'Task',
        component: TasllistComponent
      },

      {
        path: 'dashboard',
        component: DashboardComponent
      }

    ]
  }

];