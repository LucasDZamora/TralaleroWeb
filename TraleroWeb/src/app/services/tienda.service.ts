import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tienda {
  nombre: string;
  valoracion: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://localhost:3000/api/tiendas/resumen';

  constructor(private http: HttpClient) {}

  obtenerTiendas(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.apiUrl);
  }
}
