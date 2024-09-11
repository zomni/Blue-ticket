import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  eventoSeleccionado: any = null;
  cantidadEntradas: number = 1;
  total: number = 0;
  precioOriginal: number = 0;
  descuentoAplicado: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.name = navigation.extras.state['name'];
      this.lastname = navigation.extras.state['lastname'];
      this.age = +navigation.extras.state['age'];
    }
  }

  seleccionarEvento(evento: any) {
    this.eventoSeleccionado = evento;
    this.precioOriginal = evento.tipos[0].precio;
  }

  calcularTotal() {
    let descuento = 0;
    if (this.age < 18) {
      descuento = this.precioOriginal * 0.1;
    } else if (this.age > 60) {
      descuento = this.precioOriginal * 0.2;
    }
    this.descuentoAplicado = descuento;
    this.total = (this.precioOriginal - descuento) * this.cantidadEntradas;
  }
}
