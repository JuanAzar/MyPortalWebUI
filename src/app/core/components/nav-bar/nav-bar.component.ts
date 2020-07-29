import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  activeMenuId = 0;
  menus = [
    {
      menuId : 1,
      title: 'Clients',
      sections: [
        { title: 'New Client', component: '/client/add' },
        { title: 'Client List', component: '/client/list' }
      ]
    },
    {
      menuId: 2,
      title: 'Domains',
      sections: [
        { title: 'New Domain', component: '/domain/add' },
        { title: 'Domain List', component: '/domain/list' }
      ]
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.onSectionSelection(event.urlAfterRedirects);
      }
    });
  }

  getNavItemClass(menuId: number): string{
    const linkClass = 'nav-item';
    return (this.activeMenuId === menuId) ? linkClass + ' show' : linkClass;
  }

  onSectionSelection(component: string){
    this.activeMenuId = this.getMenuIdBySectionComponent(component);
  }

  private getMenuIdBySectionComponent(component: string): number{
    let currentMenu = null;

    currentMenu = this.menus.find(menu => {
      return menu.sections.find(section => {
        return section.component === component;
      });
    });
    return (currentMenu != null) ? currentMenu.menuId : 0;
  }
}
