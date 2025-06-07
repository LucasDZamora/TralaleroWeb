import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  buscarProductos(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/buscar?nombre=${nombre}`);
  }

  obtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  obtenerHistorialPrecios(idProducto: number, tiendaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idProducto}/historial?tiendaId=${tiendaId}`);
  }

  // ***********************************************************************************
  // NUEVO MÉTODO: Para obtener todas las tiendas y sus precios actuales para un producto
  // ***********************************************************************************
  obtenerTiendasYPreciosActuales(idProducto: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idProducto}/tiendas-precios-actuales`);
  }
}