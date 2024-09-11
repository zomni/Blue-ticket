import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hub-tickets',
  templateUrl: './hub-tickets.page.html',
  styleUrls: ['./hub-tickets.page.scss'],
})
export class HubTicketsPage {
  name: string = '';
  lastname: string = '';
  age: number = 0;

  eventos = [
    { nombre: 'Concierto A', tipos: [{ nombre: 'VIP', precio: 100 }, { nombre: 'Preferencial', precio: 80 }, { nombre: 'General', precio: 50 }] },
    { nombre: 'Obra B', tipos: [{ nombre: 'VIP', precio: 120 }, { nombre: 'Preferencial', precio: 90 }, { nombre: 'General', precio: 60 }] },
  ];

  eventosSeleccionados: any[] = [];
  eventoTemporal: any = null;
  cantidadEntradas: number = 1;
  total: number = 0;
  descuentosAplicados: number[] = [];

  constructor(private router: Router, private alertController: AlertController) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.name = navigation.extras.state['name'];
      this.lastname = navigation.extras.state['lastname'];
      this.age = +navigation.extras.state['age'];
    }
  }

  seleccionarEvento(evento: any) {
    this.eventoTemporal = {
      evento: evento,
      cantidadEntradas: 1,
      tipoSeleccionado: evento.tipos[0],
      precioOriginal: evento.tipos[0].precio,
    };
  }

  agregarEvento() {
    if (this.eventoTemporal) {
      this.eventosSeleccionados.push({ ...this.eventoTemporal });
      this.eventoTemporal = null;
    }
  }

  calcularDescuento(precio: number): number {
    if (this.age < 18) {
      return precio * 0.1;
    } else if (this.age > 60) {
      return precio * 0.2;
    }
    return 0;
  }

  calcularTotal() {
    this.total = 0;
    this.descuentosAplicados = [];

    this.eventosSeleccionados.forEach((seleccion, index) => {
      let descuento = this.calcularDescuento(seleccion.tipoSeleccionado.precio);
      this.descuentosAplicados[index] = descuento;
      let totalPorEvento = (seleccion.tipoSeleccionado.precio - descuento) * seleccion.cantidadEntradas;
      this.total += totalPorEvento;
    });
  }

  async comprarBoletos() {
    const alert = await this.alertController.create({
      header: 'Compra exitosa',
      message: 'Boletos agregados al carrito',
      buttons: ['OK']
    });
    await alert.present();

    this.eventosSeleccionados = [];
    this.total = 0;
    this.descuentosAplicados = [];
  }
}
