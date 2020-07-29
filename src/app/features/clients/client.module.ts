import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientService } from './shared/client.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClientAddComponent,
    ClientListComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
