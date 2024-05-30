import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  product: Product;
  constructor(private router: Router) {}

  ngOnInit() {
    // this.product = this.router.getCurrentNavigation().extras.state;
    this.product = history.state;
  }
}
