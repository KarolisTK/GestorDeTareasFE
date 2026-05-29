import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuarioservice } from '../../services/usuarioservice';
import { CrearUsuario } from '../../models/crear-usuario';
import { AuthService } from '../../services/auth-service';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
})
export class RegistroComponent {
  private usuarioService = inject(Usuarioservice);
  private authService = inject(AuthService);
  private toast = inject(ToastService);
  private router = inject(Router);

  dto: CrearUsuario = {
    nombreUsuario: '',
    correoUsuario: '',
    contrasenaUsuario: '',
  };

  onSubmit() {
    this.usuarioService.crear(this.dto).subscribe({
      next: () => {
        this.authService.login(this.dto.correoUsuario, this.dto.contrasenaUsuario).subscribe({
          next: () => {
            this.toast.success('Te has registrado correctamente');
            this.router.navigate(['/workspaces']);
          },
          error: () => this.toast.error('Registro correcto pero no se pudo iniciar sesión'),
        });
      },
      error: (err) => {
        if (err.status === 409) {
          this.toast.error('El correo ya está registrado');
        } else {
          this.toast.error('Algo salió mal.');
        }
      },
    });
  }
}
