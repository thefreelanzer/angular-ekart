import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
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

  getDiscountPrice() {
    return (
      this.products.price - this.products.price * (this.products.discount / 100)
    );
  }
  onNameChange(event: any) {
    // console.log(event.target.value);
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
}
