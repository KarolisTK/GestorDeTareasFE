import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuarioservice } from '../../services/usuarioservice';
import { CrearUsuario } from '../../models/crear-usuario';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
})
export class RegistroComponent {
  private usuarioService = inject(Usuarioservice);

  dto: CrearUsuario = {
    nombreUsuario:    '',
    correoUsuario:    '',
    contrasenaUsuario: '',
  };

  onSubmit() {
    this.usuarioService.crear(this.dto).subscribe({
      next: (res) => console.log('Registrado:', res),
      error: (err) => console.error('Error:', err),
    });
  }
}
