import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  linkId = 1;
  links = [ 
    {
      linkId: 1, 
      title: 'Clients',
      sections: [
        { title: "New Client", module: "/client/add" },
        { title: "Client List", module: "/client/list" }
      ]
    },
    {
      linkId: 2, 
      title: 'Domains',
      sections: [
        { title: "New Domain", module: "/domain/add" },
        { title: "Domain List", module: "/domain/list" }
      ]
    }
  ]  

  constructor() { }

  ngOnInit(): void {
  }
}
