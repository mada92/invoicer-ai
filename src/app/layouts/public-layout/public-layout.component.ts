import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>', // Tylko outlet dla treści (np. LoginComponent)
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent { }
