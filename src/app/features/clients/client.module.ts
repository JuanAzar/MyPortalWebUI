import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientService } from './shared/client.service';

@NgModule({  
  imports: [
    CommonModule,
    ClientRoutingModule
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
