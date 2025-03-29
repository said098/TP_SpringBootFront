import { Component } from '@angular/core';
import { Annonce } from '../../dtos/annoonce.dto';
import { AnnonceService } from '../../services/annonce.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-annonce-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.css']
})
export class AnnonceFormComponent {
  annonce: Annonce = {
    title: '',
    description: '',
    adress: '',
    mail: ''
  };

  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) {}

  submit(): void {
    console.log("annonce ",this.annonce)
    this.annonceService.createAnnonce(this.annonce).subscribe(() => {
      this.router.navigate(['/annonces']);
    });
  }
}
