import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tiendas',
  standalone: true,
  templateUrl: './tiendas.page.html',
  styleUrls: ['./tiendas.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TiendasPage {

  tiendas = [
    {
      nombre: 'Tienda 1',
      estrellas: 5,
      resenas: 20,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
    {
      nombre: 'Tienda 2',
      estrellas: 0,
      resenas: 12,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
    {
      nombre: 'Tienda 3',
      estrellas: 0,
      resenas: 25,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
    {
      nombre: 'Tienda 4',
      estrellas: 5,
      resenas: 20,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
    {
      nombre: 'Tienda 5',
      estrellas: 0,
      resenas: 12,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
    {
      nombre: 'Tienda 6',
      estrellas: 0,
      resenas: 25,
      categorias: ['Categoría de tienda 1', 'Categoría de tienda 2', 'Categoría de tienda 3', 'Categoría de tienda 4']
    },
  ];

  currentPage = 1;
  totalPages = 4;

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
    // Aquí podrías cargar los datos correspondientes a esa página
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}
