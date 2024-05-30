import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { AboutComponent } from '../home/about/about.component';
import { ContactComponent } from '../home/contact/contact.component';
import { ServicesComponent } from '../home/services/services.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fragmentObj;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.fragmentObj = this.activeRoute.fragment.subscribe((d) => {
      if (d) this.jumpToSection(d);
    });
  }
  ngOnDestroy() {
    this.fragmentObj.unsubscribe();
  }

  jumpToSection(section: string) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  }
}
