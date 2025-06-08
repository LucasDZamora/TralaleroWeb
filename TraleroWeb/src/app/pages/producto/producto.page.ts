import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

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
  resenas: any[] = []; // Reseñas del producto
  selectedTiendaHistorialId: number | null = null;
  selectedTiendaPrecioActualId: number | null = null;
  precioActualTiendaSeleccionada: any = null;

  // NUEVAS propiedades para reseñar
  nuevoComentario: string = '';
  nuevaValoracion: number = 5;
  usuarioAutenticado: any = null;

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

    // Verificar si hay sesión iniciada
    const user = localStorage.getItem('user');
    if (user) {
      this.usuarioAutenticado = JSON.parse(user);
      console.log('Usuario logueado:', this.usuarioAutenticado);
    } else {
      console.warn('No hay sesión iniciada, no se podrá reseñar.');
    }

    // Cargar información principal del producto
    this.productoService.obtenerProductoPorId(productoId).subscribe({
      next: (prod: any) => {
        this.producto = prod;
        console.log('Datos del producto (incluyendo mejor oferta) recibidos del API:', this.producto);

        // Cargar tiendas y precios actuales
        this.productoService.obtenerTiendasYPreciosActuales(productoId).subscribe({
          next: (tiendasData: any[]) => {
            this.tiendasProducto = tiendasData;
            console.log('Tiendas y precios actuales para el producto:', this.tiendasProducto);

            // Configurar selects de historial y precios actuales
            if (this.producto.idTiendaMasBarata) {
              this.selectedTiendaHistorialId = this.producto.idTiendaMasBarata;
            } else if (this.tiendasProducto.length > 0) {
              this.selectedTiendaHistorialId = this.tiendasProducto[0].idTienda;
            } else {
              this.selectedTiendaHistorialId = null;
            }

            if (this.selectedTiendaHistorialId) {
              this.cargarHistorial(productoId, this.selectedTiendaHistorialId);
            }

            if (this.tiendasProducto.length > 0) {
              this.selectedTiendaPrecioActualId = this.tiendasProducto[0].idTienda;
              this.onTiendaPrecioActualChange();
            }
          },
          error: (e: any) => console.error('Error cargando tiendas y precios actuales:', e)
        });

        // Cargar reseñas
        this.productoService.obtenerResenasProducto(productoId).subscribe({
          next: (resenasData: any[]) => {
            this.resenas = resenasData;
            console.log('Reseñas del producto:', this.resenas);
          },
          error: (e: any) => {
            console.error('Error cargando reseñas del producto:', e);
            this.resenas = [];
          }
        });

      },
      error: (e: any) => console.error('Error cargando producto principal:', e)
    });
  }

  // Cargar historial de precios
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

  // Cambio de selección de tienda para historial
  onTiendaHistorialChange() {
    if (this.selectedTiendaHistorialId && this.producto.idProducto) {
      this.cargarHistorial(this.producto.idProducto, this.selectedTiendaHistorialId);
    } else {
      this.historial = [];
    }
  }

  // Cambio de tienda para precio actual
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

  // Manejar errores de carga de imagen
  onImageError(event: any) {
    event.target.src = 'assets/img/product-placeholder.png';
  }

  agregarResena() {
    if (!this.usuarioAutenticado) {
      alert('Debes iniciar sesión para agregar una reseña.');
      return;
    }

    if (!this.nuevoComentario.trim()) {
      alert('El comentario no puede estar vacío.');
      return;
    }

    const resena = {
      idProducto: this.producto.idProducto,
      idUsuario: this.usuarioAutenticado.id,
      resena: this.nuevoComentario,
      valoracion: this.nuevaValoracion
    };

    console.log('Enviando reseña:', resena);

    this.productoService.agregarResenaProducto(resena).subscribe({
      next: (res) => {
        console.log('Reseña agregada exitosamente:', res);

        // Volver a cargar reseñas del producto desde el servidor
        this.productoService.obtenerResenasProducto(this.producto.idProducto).subscribe({
          next: (resenasData: any[]) => {
            this.resenas = resenasData;
            console.log('Reseñas actualizadas:', this.resenas);
          },
          error: (e: any) => {
            console.error('Error actualizando reseñas después de agregar:', e);
          }
        });

        // Limpiar el formulario
        this.nuevoComentario = '';
        this.nuevaValoracion = 5;
      },
      error: (err) => {
        console.error('Error al agregar reseña:', err);
        alert('Hubo un error al enviar la reseña.');
      }
    });
  }

}
