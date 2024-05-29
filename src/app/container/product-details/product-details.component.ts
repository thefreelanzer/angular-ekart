import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() productListComp: ProductsListComponent = undefined;
  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }

  close() {
    this.productListComp.clearSelectedProduct();
  }
}
