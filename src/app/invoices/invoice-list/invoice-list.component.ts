import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Invoice {
  id: number;
  number: string;
  amount: number;
  contractor: string;
  issueDate: string;
  dueDate: string;
}

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html'
})

export class InvoiceListComponent {
  invoices: Invoice[] = [
    {
      id: 1,
      number: 'FV/2024/001',
      amount: 1000,
      contractor: 'Firma A',
      issueDate: '2024-05-01',
      dueDate: '2024-05-15'
    },
    {
      id: 2,
      number: 'FV/2024/002',
      amount: 2000,
      contractor: 'Firma B',
      issueDate: '2024-05-05',
      dueDate: '2024-05-20'
    },
    {
      id: 3,
      number: 'FV/2024/003',
      amount: 1500,
      contractor: 'Firma C',
      issueDate: '2024-05-10',
      dueDate: '2024-05-25'
    }
  ];

  selectedInvoice: Invoice | null = null;

  openInvoiceDetails(invoice: Invoice): void {
    this.selectedInvoice = invoice;
  }

  closeDialog(): void {
    this.selectedInvoice = null;
  }
}
