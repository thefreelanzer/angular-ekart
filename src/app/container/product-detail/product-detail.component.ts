import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/products/product.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productId: number;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  product: any;
  products: any[];
  paramMapObj;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.products;
    // this.productId = +this.activeRoute.snapshot.params['id'];
    // this.productId = +this.activeRoute.snapshot.paramMap.get('id');
    // this.product = this.products.find((p) => p.id === this.productId);
    this.paramMapObj = this.activeRoute.paramMap.subscribe((data) => {
      this.productId = +data['id']; //param
      this.productId = +data.get('id'); //paramMap
      this.product = this.products.find((p) => p.id === this.productId);
    });
  }

  ngOnDestroy() {
    this.paramMapObj.unsubscribe();
  }

  formatDescription(str: string) {
    return str.slice(0, 100) + '...';
  }
}
