import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'products', component: ContainerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/product/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent },
];
