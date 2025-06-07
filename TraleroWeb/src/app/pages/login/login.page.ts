import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/usuarios.service';
import { DatosLogin } from '../../models/datosLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  DatosLogin: DatosLogin = {
    correo: '',
    contrasena: ''
  };

  correoInvalido: boolean = false;
  errorMensaje: string = '';

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) {}

  async onLogin() {
    if (!this.DatosLogin.correo || !this.DatosLogin.contrasena) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        color: 'warning'
      });
      return toast.present();
    }

    if (!this.validarCorreo(this.DatosLogin.correo)) {
      this.correoInvalido = true;
      this.errorMensaje = 'El correo electrónico no es válido.';

      const toast = await this.toastCtrl.create({
        message: this.errorMensaje,
        duration: 2500,
        color: 'warning'
      });
      await toast.present();
      return;
    } else {
      this.correoInvalido = false;
      this.errorMensaje = '';
    }

    const loading = await this.loadingCtrl.create({
      message: 'Ingresando...',
      spinner: 'crescent'
    });
    await loading.present();

    this.authService.login(this.DatosLogin).subscribe({
      next: async (res: any) => {
        await loading.dismiss();

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        // Mostrar mensaje de éxito antes de navegar
        const toast = await this.toastCtrl.create({
          message: 'Inicio de sesión exitoso',
          duration: 1500,
          color: 'success'
        });
        await toast.present();

        // Esperar a que el toast termine para navegar
        setTimeout(() => {
          this.navCtrl.navigateRoot('/home');
        }, 1500);
      },
      error: async (err) => {
        await loading.dismiss();

        const toast = await this.toastCtrl.create({
          message: err.error?.error || 'Error al iniciar sesión',
          duration: 2500,
          color: 'danger'
        });
        await toast.present();
      }
    });
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  onRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
