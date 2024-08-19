import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-app';
}
