import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
// Zaimportuj inne komponenty, które będą wewnątrz private layoutu
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';

// Zaimportuj strażnika (guard), który będzie chronił trasy prywatne (stworzymy go później)
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  // Trasy publiczne (używają PublicLayoutComponent)
  {
    path: '', // Ścieżka bazowa dla layoutu publicznego
    component: PublicLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // Możesz dodać tu inne publiczne trasy, np. rejestrację, reset hasła
      // { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' } // Domyślnie przekieruj na logowanie
    ]
  },

  // Trasy prywatne (używają PrivateLayoutComponent i powinny być chronione)
  {
    path: 'app', // Wspólny prefix dla tras prywatnych (opcjonalnie)
    component: PrivateLayoutComponent,
    // canActivate: [authGuard], // Dodaj strażnika (guard) do ochrony tych tras
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'invoices', component: InvoiceListComponent },
      // ... inne trasy prywatne
      // Domyślna trasa po zalogowaniu
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Przekierowanie dla nieznanych ścieżek (opcjonalnie)
  // { path: '**', redirectTo: 'login' } // lub na stronę 404
];
