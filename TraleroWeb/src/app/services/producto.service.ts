import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Producto } from '../models/producto'; // Comentado, la definimos aquí directamente

// Definimos la interfaz Producto aquí para evitar problemas de "no encontrado"
export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  link: string;
  precioMasBarato: number;
  idTiendaMasBarata: number;
  valoracionProducto: number;
  // Agrega otras propiedades si las necesitas de tu API
}

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
  obtenerProductosHome(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/home`);
  }

  agregarResenaProducto(resena: {idProducto: number, idUsuario: number, resena: string, valoracion: number}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/resena`, resena);
  }

  getChartUrl(historial: { fecha: string, precio: string }[]) {
    // Asegurarse de que los datos estén ordenados por fecha
    const sortedHistorial = [...historial].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

    // **CORRECCIÓN 1: Convertir la fecha a milisegundos para que la escala de tiempo la interprete correctamente.**
    const data = sortedHistorial.map(h => ({ x: new Date(h.fecha).getTime(), y: +h.precio }));

    const chartConfig = {
      type: 'line',
      data: {
        datasets: [{
          label: 'Historial de Precio',
          data: data,
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverRadius: 7,
          pointHoverBackgroundColor: 'rgb(54, 162, 235)',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
        }]
      },
      options: {
        parsing: false,
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top' as const,
            labels: {
                font: {
                    size: 14
                }
            }
          },
          tooltip: {
            callbacks: {
              title: (context: any) => {
                return new Date(context[0].parsed.x).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });
              },
              label: (context: any) => {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
                }
                return label;
              }
            },
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 5,
            displayColors: false,
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'dd-MM-yyyy',
              displayFormats: {
                day: 'dd-MM-yyyy'
              }
            },
            adapters: {
              date: {}
            },
            title: {
              display: true,
              text: 'Fecha',
              font: {
                size: 14
              }
            },
            ticks: {
              source: 'auto', // Generar ticks automáticamente.
              autoSkip: true, // Permitir saltar etiquetas para que no se amontonen.
              maxTicksLimit: 10, // Limitar el número máximo de etiquetas visibles.
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 10
              },
              color: '#444',
            },
            grid: {
                display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Precio (CLP)',
              font: {
                size: 14
              }
            },
            ticks: {
              callback: function(value: any) {
                return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
              },
              font: {
                size: 12
              },
              color: '#444',
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
      }
    };

    const body = {
      version: '4',
      width: 1200,
      height: 600,
      devicePixelRatio: 1.5,
      backgroundColor: '#f8f8f8',
      chart: chartConfig
    };

    return this.http.post<{url: string}>('https://quickchart.io/chart/create', body);
  }
}