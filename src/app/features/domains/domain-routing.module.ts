import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainAddComponent } from './components/domain-add/domain-add.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';

const routes: Routes = [
  { path: 'add', component: DomainAddComponent },
  { path: 'list', component: DomainListComponent},
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
