import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  viewChild,
} from '@angular/core';
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

  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }

  /** when variable passing through the function */
  // updateSearchText(inputEl: HTMLInputElement) {
  //   this.searchText = inputEl.value;
  //   this.onSearchImput.emit(this.searchText);
  // }

  // fetch value using viewChild

  // @ViewChild('searchInput') searchInputValue: ElementRef;
  // updateSearchText() {
  //   this.searchText = this.searchInputValue.nativeElement.value;
  //   this.onSearchImput.emit(this.searchText);
  // }

  change() {
    this.onSearchImput.emit(this.searchText);
  }
}
