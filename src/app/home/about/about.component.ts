import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private activateRoute: ActivatedRoute) {}
  testData: any;
  ngOnInit() {
    this.activateRoute.data.subscribe((data) => {
      this.testData = data;
    });
  }
}
