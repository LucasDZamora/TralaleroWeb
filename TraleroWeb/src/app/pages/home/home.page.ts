import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {
  products = [
    {
      name: 'Producto 1',
      price: 198.00,
      oldPrice: 400.00,
      discount: 50,
      isNew: true
    },
    {
      name: 'Producto 2',
      price: 24.99,
      oldPrice: 49.99,
      discount: 50,
      isNew: true
    },
    {
      name: 'Producto 3',
      price: 24.99,
      oldPrice: null,
      discount: 0,
      isNew: false
    },
    {
      name: 'Producto 4',
      price: 224.99,
      oldPrice: 299.99,
      discount: 25,
      isNew: true
    },
    {
      name: 'Producto 5',
      price: 24.99,
      oldPrice: null,
      discount: 0,
      isNew: false
    },
    {
      name: 'Producto 6',
      price: 24.99,
      oldPrice: 49.99,
      discount: 50,
      isNew: true
    }
  ];

  discounts = [
    { amount: 50 },
    { amount: 70 },
    { amount: 80 }
  ];

  // Función para obtener siempre la misma imagen
  getProductImage(): string {
    return 'assets/images/tralalero-tralala.jpg';
  }
}