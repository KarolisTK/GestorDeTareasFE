import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router      = inject(Router);
  private authService = inject(AuthService);

  correo    = '';
  contrasena = '';

  onSubmit() {
    this.authService.login(this.correo, this.contrasena).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/workspaces']);
      },
      error: (err) => console.error('Error login:', err),
    });
  }
}
