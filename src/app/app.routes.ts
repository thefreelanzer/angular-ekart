import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivateChild, resolveProducts } from './auth.guard';
import { UsersComponent } from './users/users.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [
      (comp: any) => {
        return comp.canExit();
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ContainerComponent,
    resolve: { products: resolveProducts },
  },
  //   { path: 'products/product/:id', component: ProductDetailComponent },
  {
    path: 'products',
    children: [
      { path: 'product/:id', component: ProductDetailComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        // canActivate: [canActive],
      },
    ],
    canActivateChild: [canActivateChild],
  },
  { path: 'about', component: AboutComponent, data: { name: 'Test' } },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: '**', component: NotFoundComponent },
];
