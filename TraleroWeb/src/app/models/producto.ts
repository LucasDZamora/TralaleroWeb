export interface Producto {
  idProducto: number;
  nombre: string;
  categoria: string;
  link: string;
  descripcion: string;  // cambio para evitar tilde y para que sea válido JS
  imagen: string;
  valoracion: number;
}
