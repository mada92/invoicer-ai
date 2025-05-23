import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  // Zmień .css na .scss tutaj:
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null;

  onSubmit(): void {
    this.errorMessage = null;
    console.log('Próba logowania z danymi:', this.loginData);

    // TODO: Logika serwisu autoryzacji
    if (this.loginData.username !== 'admin' || this.loginData.password !== 'password') {
      this.errorMessage = 'Nieprawidłowy login lub hasło (przykład).';
    } else {
      console.log('Logowanie pomyślne (przykład).');
      // Przekierowanie
    }
  }
}
