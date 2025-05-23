import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceListComponent, Invoice } from './invoice-list.component';

describe('InvoiceListComponent', () => {
  let component: InvoiceListComponent;
  let fixture: ComponentFixture<InvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close invoice details', () => {
    const invoice: Invoice = {
      id: 99,
      number: 'TEST',
      amount: 123,
      contractor: 'Test Corp',
      issueDate: '2024-01-01',
      dueDate: '2024-01-15'
    };
    component.openInvoiceDetails(invoice);
    expect(component.selectedInvoice).toEqual(invoice);

    component.closeDialog();
    expect(component.selectedInvoice).toBeNull();
  });
});
