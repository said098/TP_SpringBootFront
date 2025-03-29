import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './core/layouts/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TpSpringbootFront';
}
