import { Component, EventEmitter, Output } from '@angular/core';
import { FeatherModule } from "angular-feather";
import { SidebarService } from '../../shared/services/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FeatherModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {
  }

   toggleSidebar() {
    this.sidebarService.toggle();
  }

}
