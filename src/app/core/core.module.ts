import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbNav, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({  
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [
    NavBarComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
