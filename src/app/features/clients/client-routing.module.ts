import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  { path: 'add', component: ClientAddComponent},
  { path: 'list', component: ClientListComponent },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
