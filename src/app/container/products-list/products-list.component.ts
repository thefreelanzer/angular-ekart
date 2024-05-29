import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from '../../Models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, FilterComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  selectedProduct: Product;
  products: any[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.products;
  }

  productCpy = this.productService.products;
  all: number = 0;
  inStock: number = 0;
  outOfStock: number = 0;

  filterSelected: string = 'all';
  @Input()
  searchText: string = '';
  filteredProducts: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText']) {
      this.applyFilter();
      this.updateCount();
    }
  }
  applyFilter() {
    if (this.searchText) {
      const searchLower = this.searchText.toLowerCase();
      this.filteredProducts = this.filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(searchLower)
      );
    } else {
      this.filteredProducts = this.productCpy;
    }
    this.products = this.filteredProducts;
  }
  updateCount() {
    this.all = this.filteredProducts.length;
    this.inStock = this.filteredProducts.filter(
      (p) => p.is_in_inventory === true
    ).length;
    this.outOfStock = this.filteredProducts.filter(
      (p) => p.is_in_inventory === false
    ).length;
  }

  onChangeFilter(value: string) {
    this.applyFilter();
    this.filterSelected = value;

    if (value === 'true' || value === 'false') {
      const filterValue = value === 'true';
      this.filteredProducts = this.filteredProducts.filter(
        (p) => p.is_in_inventory === filterValue
      );
    }

    this.products = this.filteredProducts;
  }

  clearSelectedProduct(): void {
    this.selectedProduct = null;
  }
}
