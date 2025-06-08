import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  products: any[] = [];
  discounts = [
    { amount: 50 },
    { amount: 70 },
    { amount: 80 }
  ];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.buscarProductosHome().subscribe({
      next: (resp) => {
        this.products = resp;
        console.log('Productos cargados:', this.products);
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  getProductImage(product: any): string {
    return product.imagen ? product.imagen : 'assets/images/default-product.png';
  }
}
