import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  credentials: Credentials = { email: '', password: '' };

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async onLogin() {
    const loading = await this.loadingCtrl.create({
      message: 'Ingresando...',
      spinner: 'crescent'
    });
    await loading.present();

    // aquí iría llamando a tu API
    setTimeout(async () => {
      await loading.dismiss();

      if (this.credentials.email === 'test@example.com' && this.credentials.password === '1234') {
        this.navCtrl.navigateRoot('/home');
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Credenciales inválidas',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    }, 1500);
  }

  onForgotPassword() {
    this.navCtrl.navigateForward('/forgot-password');
  }

  onRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
