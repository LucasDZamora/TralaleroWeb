import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
  standalone: false,
})
export class BuscarProductoPage implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  orden: 'asc' | 'desc' = 'asc';

  filtro = {
    categoria: '',
  };

  categorias: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const nombre = params['nombre'];
      if (nombre) {
        this.productoService.buscarProductos(nombre).subscribe({
          next: (res) => {
            this.productos = res;
            this.productosFiltrados = [...res];
            this.categorias = [...new Set(res.map(p => p.categoria))];
            this.ordenarProductos();
          },
          error: (err) => {
            console.error('Error al obtener productos:', err);
            this.productos = [];
            this.productosFiltrados = [];
          }
        });
      }
    });
  }

  ordenarProductos() {
    // Ordenar por nombre, por ejemplo
    this.productosFiltrados.sort((a, b) => {
      const nombreA = a.nombre.toLowerCase();
      const nombreB = b.nombre.toLowerCase();

      if (nombreA < nombreB) return this.orden === 'asc' ? -1 : 1;
      if (nombreA > nombreB) return this.orden === 'asc' ? 1 : -1;
      return 0;
    });
  }

  filtrar() {
    this.productosFiltrados = this.productos.filter(p => {
      return this.filtro.categoria ? p.categoria === this.filtro.categoria : true;
    });

    this.ordenarProductos();
  }
}
