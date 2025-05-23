import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../shared/top-menu.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent { }
