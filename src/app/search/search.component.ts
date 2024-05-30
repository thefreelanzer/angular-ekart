import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchQuery: string = '';
  route: Router = inject(Router);
  onSearch(val: string) {
    this.route.navigate(['/products'], { queryParams: { search: val } });
  }
}
