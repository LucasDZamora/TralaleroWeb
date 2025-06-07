import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: false
})
export class ProductoPage implements OnInit {

  producto: any = null; // Para los datos del producto y la mejor oferta
  historial: any[] = []; // Para la lista de historial de precios

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      console.error('ID de producto faltante en la URL.');
      return;
    }

    const productoId = +id; // Convertir a número

    this.productoService.obtenerProductoPorId(productoId).subscribe({
      next: (prod: any) => { // Tipado explícito 'prod: any'
        this.producto = prod;
        console.log('Datos del producto (incluyendo mejor oferta) recibidos del API:', this.producto);

        // Cargar historial de precios:
        // Si hay una tienda más barata, carga el historial de esa tienda.
        // Si no, usa la tienda ID 1 como fallback (o la que consideres por defecto).
        const tiendaIdParaHistorial = this.producto.idTiendaMasBarata || 1;
        this.cargarHistorial(productoId, tiendaIdParaHistorial);
      },
      error: (e: any) => console.error('Error cargando producto o mejor oferta:', e) // Tipado explícito 'e: any'
    });
  }

  cargarHistorial(idProducto: number, tiendaId: number) {
    this.productoService.obtenerHistorialPrecios(idProducto, tiendaId)
      .subscribe({
        next: (data: any[]) => { // Tipado explícito 'data: any[]'
          this.historial = data;
          console.log('Historial de precios recibido para tienda ID', tiendaId, ':', this.historial);
        },
        error: (e: any) => console.error('Error cargando historial de precios:', e) // Tipado explícito 'e: any'
      });
  }

  onImageError(event: any) {
    // Si la imagen no carga, usa un placeholder genérico que funcione.
    event.target.src = 'assets/img/product-placeholder.png';
    // Asegúrate de que 'src/assets/img/product-placeholder.png' exista.
  }
}