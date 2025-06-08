import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

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

  obtenerTiendasYPreciosActuales(idProducto: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idProducto}/tiendas-precios-actuales`);
  }

  obtenerResenasProducto(idProducto: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${idProducto}/resenas`);
  }

  agregarResenaProducto(resena: {idProducto: number, idUsuario: number, resena: string, valoracion: number}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/resena`, resena);
  }

}