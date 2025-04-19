import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
  standalone: false,
})
export class BuscarProductoPage {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop', descripcion: 'Gaming', precio: 1200, categoria: 'Tecnología', },
    { id: 2, nombre: 'Zapatillas', descripcion: 'Deportivas', precio: 80, categoria: 'Ropa',},
    { id: 3, nombre: 'Celular', descripcion: 'Smartphone', precio: 500, categoria: 'Tecnología'},
  ];

  productosFiltrados: Producto[] = [];

  filtro = {
    precioMin: 0,
    precioMax: Infinity,
    categoria: ''
  };

  orden: 'asc' | 'desc' = 'asc';

  categorias: string[] = [];

  ngOnInit() {
    this.productosFiltrados = [...this.productos];
    this.categorias = [...new Set(this.productos.map(p => p.categoria))];
  }

  ordenarProductos() {
    this.productosFiltrados.sort((a, b) => {
      return this.orden === 'asc' ? a.precio - b.precio : b.precio - a.precio;
    });
  }

  filtrar() {
    this.productosFiltrados = this.productos.filter(p => {
      const cumplePrecio = p.precio >= this.filtro.precioMin && p.precio <= this.filtro.precioMax;
      const cumpleCategoria = this.filtro.categoria ? p.categoria === this.filtro.categoria : true;
      return cumplePrecio && cumpleCategoria;
    });
    this.ordenarProductos();
  }
}
