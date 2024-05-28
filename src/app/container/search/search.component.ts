import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  onSearchImput: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  change() {
    this.onSearchImput.emit(this.searchText);
  }
}
