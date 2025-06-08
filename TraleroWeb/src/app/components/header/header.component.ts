import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  nombreUsuario: string = '';

  ngOnInit() {
    this.checkLoginStatus();
  }

    checkLoginStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    this.isLoggedIn = !!token;

    if (user) {
      const parsedUser = JSON.parse(user);
      this.nombreUsuario = parsedUser.nombre || 'Usuario';
    }
  }

  @Input() placeholderText: string = 'Search'; 
  @Output() searchEvent = new EventEmitter<string>(); 

  searchText: string = ''; 

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchText.trim()) {
      this.router.navigate(['/buscar-producto'], {
        queryParams: { nombre: this.searchText }
      });
    }
  }
}
