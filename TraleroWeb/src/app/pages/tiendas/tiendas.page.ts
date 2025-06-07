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
      this.totalPages = Math.ceil(data.length / 6);
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
    const start = (this.currentPage - 1) * 6;
    return this.tiendas.slice(start, start + 6);
  }
  getStarsArray(valoracion: number): any[] {
  return Array(Math.round(valoracion)).fill(0);
  }
}
