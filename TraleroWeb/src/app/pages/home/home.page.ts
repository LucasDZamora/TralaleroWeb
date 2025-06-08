import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

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

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit() {
    this.cargarProductosHome();
  }

  verProducto(id: number) {
    this.router.navigate(['/producto', id]);
  }

  cargarProductosHome() {
    this.productoService.obtenerProductosHome().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error al cargar productos recientes:', err);
      }
    });
  }
}
