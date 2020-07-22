import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  linkId = 1;
  links = [ 
    { id: 1, title: 'Clients', module: '/client' },
    { id: 2, title: 'Domains', module: '/domain' }
  ]  

  constructor() { }

  ngOnInit(): void {
  }
}
