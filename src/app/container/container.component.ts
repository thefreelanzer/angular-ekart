import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    SearchComponent,
    CommonModule,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  email = 'name@example.com';
  products = {
    name: 'Iphone 15',
    price: 95000,
    color: 'black',
    discount: 5,
    inStock: 10,
    image: '/assets/images/products/iphone.png',
  };
  quantity: number = 0;
  nameArray: string[] = ['A', 'B', 'C', 'D'];

  getDiscountPrice() {
    return (
      this.products.price - this.products.price * (this.products.discount / 100)
    );
  }
  onNameChange(event: any) {
    this.email = event.target.value;
  }
  changeQuantity(count: number) {
    const newQuantity = this.quantity + count;
    if (newQuantity < 0) {
      this.quantity = 0;
    } else if (newQuantity > this.products.inStock) {
      this.quantity = this.products.inStock;
    } else {
      this.quantity = newQuantity;
    }
  }

  searchText: string = '';
  searchProducts(value: string) {
    this.searchText = value;
  }
}
