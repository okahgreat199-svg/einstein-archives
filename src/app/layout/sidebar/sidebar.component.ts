import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu-item';
import { MENU_ITEMS } from './menu-items';
import { FeatherModule } from 'angular-feather';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, NgFor, NgIf, FeatherModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarCollapsed = false;

  menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private router: Router) 
  {

  }

  ngOnInit() {
    this.openMenuForCurrentRoute();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.openMenuForCurrentRoute();
      });
  }

  toggleMenuItem(item: MenuItem) {
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

  openMenuForCurrentRoute() {
    const currentUrl = this.router.url;

    const setOpenRec = (item: any) => {
      item.isOpen = this.checkOpenState(item, currentUrl);
      if (item.children) {
        item.children.forEach((c: any) => setOpenRec(c));
      }
    };
    this.menuItems.forEach(item => setOpenRec(item));
  }

  checkOpenState(item: any, currentUrl: string) {
    if (item.route) {
      const route = item.route.startsWith('/') ? item.route : '/' + item.route;
      if (currentUrl === route || currentUrl.startsWith(route + '/') || currentUrl.startsWith(route + '?') || currentUrl.startsWith(route)) {
        return true;
      }
    }
    if (item.children) {
      return item.children.some((child: any) => this.checkOpenState(child, currentUrl));
    } 
    return false;
  }
}


