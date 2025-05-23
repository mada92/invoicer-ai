import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../shared/top-menu.component';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    TopMenuComponent
  ],
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent { }
