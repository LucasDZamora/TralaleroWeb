import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tienda {
  idTienda: number;
  nombre: string;
  valoracion: number;
  cantidadResenas: number;
}

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://localhost:3000/api/tiendas/valoraciones';

  constructor(private http: HttpClient) {}

  obtenerTiendas(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(`${this.apiUrl}`);
  }
}
