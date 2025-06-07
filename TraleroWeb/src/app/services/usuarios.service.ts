import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private API_URL = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  registrarUsuario(datos: Usuario): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, datos);
  }

  login(credentials: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }
}
