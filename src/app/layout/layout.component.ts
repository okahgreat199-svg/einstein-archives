import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SidebarService } from '../shared/services/sidebar.service';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent]
})
export class LayoutComponent implements OnInit, OnDestroy {
  private routerSub?: Subscription;
  private readonly MOBILE_BREAKPOINT = 768; // px

  constructor(public sidebarService: SidebarService, private router: Router) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.innerWidth < this.MOBILE_BREAKPOINT) {
      this.sidebarService.close();
    }

    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      if (typeof window !== 'undefined' && window.innerWidth < this.MOBILE_BREAKPOINT) {
        this.sidebarService.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < this.MOBILE_BREAKPOINT) {
      this.sidebarService.close();
    } else {
      this.sidebarService.open();
    }
  }
}
