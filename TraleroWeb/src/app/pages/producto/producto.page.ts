import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: false
})
export class ProductoPage implements OnInit {

  producto: any = null;
  historial: any[] = [];
  tiendasProducto: any[] = [];
  resenas: any[] = []; // NUEVA PROPIEDAD para almacenar las reseñas
  selectedTiendaHistorialId: number | null = null;
  selectedTiendaPrecioActualId: number | null = null;
  precioActualTiendaSeleccionada: any = null;

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

    const productoId = +id;

    // Cargar información principal del producto
    this.productoService.obtenerProductoPorId(productoId).subscribe({
      next: (prod: any) => {
        this.producto = prod;
        console.log('Datos del producto (incluyendo mejor oferta) recibidos del API:', this.producto);

        // Cargar todas las tiendas y sus precios actuales para este producto
        this.productoService.obtenerTiendasYPreciosActuales(productoId).subscribe({
          next: (tiendasData: any[]) => {
            this.tiendasProducto = tiendasData;
            console.log('Tiendas y precios actuales para el producto:', this.tiendasProducto);

            // Inicializar el select de historial con la tienda de la mejor oferta o la primera disponible
            if (this.producto.idTiendaMasBarata) {
              this.selectedTiendaHistorialId = this.producto.idTiendaMasBarata;
            } else if (this.tiendasProducto.length > 0) {
              this.selectedTiendaHistorialId = this.tiendasProducto[0].idTienda;
            } else {
              this.selectedTiendaHistorialId = null; // No hay tiendas disponibles
            }

            // Cargar el historial inicial si hay una tienda seleccionada
            if (this.selectedTiendaHistorialId) {
              this.cargarHistorial(productoId, this.selectedTiendaHistorialId);
            }

            // Inicializar el select de precio actual con la primera tienda (o ninguna)
            if (this.tiendasProducto.length > 0) {
              this.selectedTiendaPrecioActualId = this.tiendasProducto[0].idTienda;
              this.onTiendaPrecioActualChange(); // Cargar el precio inicial
            }
          },
          error: (e: any) => console.error('Error cargando tiendas y precios actuales:', e)
        });

        // *********************************************************************
        // NUEVA LLAMADA: Cargar reseñas del producto
        // *********************************************************************
        this.productoService.obtenerResenasProducto(productoId).subscribe({
          next: (resenasData: any[]) => {
            this.resenas = resenasData;
            console.log('Reseñas del producto:', this.resenas);
          },
          error: (e: any) => {
            console.error('Error cargando reseñas del producto:', e);
            this.resenas = []; // Asegurarse de que sea un array vacío en caso de error o 404
          }
        });

      },
      error: (e: any) => console.error('Error cargando producto principal:', e)
    });
  }

  // Método para cargar el historial de precios según la tienda seleccionada
  cargarHistorial(idProducto: number, tiendaId: number) {
    this.productoService.obtenerHistorialPrecios(idProducto, tiendaId)
      .subscribe({
        next: (data: any[]) => {
          this.historial = data;
          console.log('Historial de precios recibido para tienda ID', tiendaId, ':', this.historial);
        },
        error: (e: any) => console.error('Error cargando historial de precios:', e)
      });
  }

  // Manejador del cambio de selección para el historial
  onTiendaHistorialChange() {
    if (this.selectedTiendaHistorialId && this.producto.idProducto) {
      this.cargarHistorial(this.producto.idProducto, this.selectedTiendaHistorialId);
    } else {
      this.historial = []; // Limpiar historial si no hay tienda seleccionada
    }
  }

  // Manejador del cambio de selección para el precio actual
  onTiendaPrecioActualChange() {
    if (this.selectedTiendaPrecioActualId) {
      this.precioActualTiendaSeleccionada = this.tiendasProducto.find(
        (t) => t.idTienda === this.selectedTiendaPrecioActualId
      );
    } else {
      this.precioActualTiendaSeleccionada = null;
    }
    console.log('Precio actual de la tienda seleccionada:', this.precioActualTiendaSeleccionada);
  }

  onImageError(event: any) {
    event.target.src = 'assets/img/product-placeholder.png';
  }
}