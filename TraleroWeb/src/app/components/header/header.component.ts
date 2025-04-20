import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent{

  @Input() placeholderText: string = 'Search'; 
  @Output() searchEvent = new EventEmitter<string>(); 

  searchText: string = ''; 

  onSearch() {
    this.searchEvent.emit(this.searchText); 
  }
}
