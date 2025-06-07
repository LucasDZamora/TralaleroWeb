import { Component, OnInit } from '@angular/core';
import { TiendaService, Tienda } from 'src/app/services/tienda.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.page.html',
  styleUrls: ['./tiendas.page.scss'],
  standalone: false
})
export class TiendasPage implements OnInit {
  tiendas: Tienda[] = [];

  currentPage = 1;
  totalPages = 1;

  constructor(private tiendaService: TiendaService) {}

  ngOnInit() {
    this.tiendaService.obtenerTiendas().subscribe(data => {
      this.tiendas = data;
      this.totalPages = Math.ceil(data.length / 12); // ← Muestra 12 por página
    });
  }

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.goToPage(this.currentPage + 1);
  }

  getTiendasPaginadas() {
    const start = (this.currentPage - 1) * 12; // ← Muestra 12 por página
    return this.tiendas.slice(start, start + 12);
  }

  getStarIcons(valoracion: number): string[] {
    const icons: string[] = [];
    const fullStars = Math.floor(valoracion);
    const decimal = valoracion % 1;
    const hasHalfStar = decimal >= 0.25 && decimal < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      icons.push('star');
    }

    if (hasHalfStar) {
      icons.push('star-half');
    }

    for (let i = 0; i < emptyStars; i++) {
      icons.push('star-outline');
    }

    return icons;
  }
}
