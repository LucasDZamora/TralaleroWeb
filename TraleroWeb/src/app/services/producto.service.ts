import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}
  private API_URL = 'http://localhost:3000/api/productos';

  

  buscarProductos(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.API_URL}/buscar?nombre=${nombre}`);
  }
}
