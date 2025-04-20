import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  placeholderText: string = 'Search';

  constructor(private router: Router) {}

  handleSearch(searchText: string) {
    this.router.navigate(['/buscar-producto'], {
      queryParams: { query: searchText }
    });
  }
}
