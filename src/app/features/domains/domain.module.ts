import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainRoutingModule } from './domain-routing.module';
import { DomainAddComponent } from './components/domain-add/domain-add.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';
import { DomainService } from './shared/domain.service';

@NgModule({
  imports: [
    CommonModule,
    DomainRoutingModule
  ],
  declarations: [
    DomainAddComponent,
    DomainListComponent
  ],
  providers: [
    DomainService
  ]
})
export class DomainModule { }
