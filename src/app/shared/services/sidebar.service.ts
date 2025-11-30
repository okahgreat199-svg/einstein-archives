import { Injectable } from '@angular/core';
import { signal } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SidebarService {
  private sidebarOpen = signal(true);
  
  readonly isOpen = this.sidebarOpen.asReadonly();
  
  toggle() {
    this.sidebarOpen.update(value => !value);
  }
  
  open() {
    this.sidebarOpen.set(true);
  }
  
  close() {
    this.sidebarOpen.set(false);
  }
}
