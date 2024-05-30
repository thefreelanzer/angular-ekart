import { inject } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { ProductService } from './services/products/product.service';

export const canActive = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const canActivateChild = () => {
  canActive();
};

export const resolveProducts = () => {
  const productService = inject(ProductService);
  return productService.fetchProducts();
};
