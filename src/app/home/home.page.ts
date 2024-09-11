import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';
  lastname: string = '';
  password: string = '';
  age: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if (this.name === '' || this.password === '' || this.age === '') {
      const alert = await this.alertController.create({
        header: 'Fallo al iniciar sesión',
        message: 'Rellene todos los campos',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.router.navigate(['/hub-tickets'], {
        state: {
          name: this.name,
          lastname: this.lastname,
          age: this.age,
        },
      });
    }
  }
}
