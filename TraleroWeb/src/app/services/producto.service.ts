import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ¡Necesario para hacer peticiones HTTP!
import { Observable } from 'rxjs'; // Necesario para los observables

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Asegúrate de que esta URL base apunte a tu servidor Express/backend
  // Por ejemplo, si tu backend corre en localhost:3000 y tus rutas son /api/productos
  private baseUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { } // Inyecta HttpClient en el constructor

  // Método para buscar productos por nombre (si lo usas en otro lado)
  buscarProductos(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/buscar?nombre=${nombre}`);
  }

  // Método para obtener los detalles de un producto por ID (con la mejor oferta)
  obtenerProductoPorId(id: number): Observable<any> {
    // Coincide con tu ruta GET /api/productos/:id
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Método para obtener el historial de precios de un producto y una tienda específica
  obtenerHistorialPrecios(idProducto: number, tiendaId: number): Observable<any[]> {
    // Coincide con tu ruta GET /api/productos/:idProducto/historial?tiendaId=...
    return this.http.get<any[]>(`${this.baseUrl}/${idProducto}/historial?tiendaId=${tiendaId}`);
  }
}