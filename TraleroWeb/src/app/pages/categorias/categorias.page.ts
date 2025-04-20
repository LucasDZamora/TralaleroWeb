import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: false
})
export class CategoriasPage implements OnInit {

  categorias = [
    {
      nombre: 'Tecnología',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    },
    {
      nombre: 'Ropa',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    },
    {
      nombre: 'Comida',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    },
    {
      nombre: 'Herramientas',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    },
    {
      nombre: 'Bebidas',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    },
    {
      nombre: 'Zapatos',
      subcategorias: ['Sub categoría 1', 'Sub categoría 2', 'Sub categoría 3']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}