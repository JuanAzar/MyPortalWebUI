import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'client', 
    loadChildren: () => import('./features/clients/client.module').then(m => m.ClientModule) 
  },
  { 
    path: 'domain', 
    loadChildren: () => import('./features/domains/domain.module').then(m => m.DomainModule) 
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }