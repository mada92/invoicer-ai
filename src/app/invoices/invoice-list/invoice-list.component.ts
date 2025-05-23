import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  invoices = [
    { id: 1, number: 'FV/2024/001', amount: 1000 },
    { id: 2, number: 'FV/2024/002', amount: 2000 },
    { id: 3, number: 'FV/2024/003', amount: 1500 }
  ];
}
