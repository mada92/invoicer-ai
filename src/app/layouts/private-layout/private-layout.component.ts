import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Możesz tu zaimportować komponenty nagłówka, stopki, nawigacji itp.
// import { HeaderComponent } from '../../shared/header/header.component';
// import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    // HeaderComponent, // Dodaj importy potrzebnych elementów UI
    // SidebarComponent
  ],
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent { }
