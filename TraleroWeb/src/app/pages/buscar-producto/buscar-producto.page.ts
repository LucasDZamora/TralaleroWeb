import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
  standalone:false
})
export class BuscarProductoPage {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop', descripcion: 'Gaming', precio: 1200, categoria: 'Tecnología' },
    { id: 2, nombre: 'Zapatillas', descripcion: 'Deportivas', precio: 2000, categoria: 'Ropa' },
    { id: 3, nombre: 'Celular', descripcion: 'Smartphone', precio: 2500, categoria: 'Tecnología' },
    { id: 4, nombre: 'Polera', descripcion: 'Verano', precio: 1500, categoria: 'Ropa' },
    { id: 5, nombre: 'Audífonos', descripcion: 'Bluetooth', precio: 3000, categoria: 'Tecnología' },
  ];

  productosFiltrados: Producto[] = [];

  orden: 'asc' | 'desc' = 'asc';

  filtro = {
    categoria: '',
  };

  categorias: string[] = [];
  rangosPrecio = [
    { min: 0, max: 1000, seleccionado: false },
    { min: 1000, max: 2000, seleccionado: false },
    { min: 2000, max: 3000, seleccionado: false },
    { min: 3000, max: 4000, seleccionado: false },
  ];

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
    const rangosSeleccionados = this.rangosPrecio.filter(r => r.seleccionado);

    this.productosFiltrados = this.productos.filter(p => {
      const cumpleCategoria = this.filtro.categoria ? p.categoria === this.filtro.categoria : true;

      const cumpleRango =
        rangosSeleccionados.length === 0 ||
        rangosSeleccionados.some(r => p.precio >= r.min && p.precio <= r.max);

      return cumpleCategoria && cumpleRango;
    });

    this.ordenarProductos();
  }
}
