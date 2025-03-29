import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../dtos/annoonce.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-annonce',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-annonce.component.html',
  styleUrls: ['./modifier-annonce.component.css']
})
export class ModifierAnnonceComponent implements OnInit {
  annonce: Annonce = {
    title: '',
    description: '',
    adress: '',
    mail: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private annonceService: AnnonceService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.annonceService.getAnnonceById(this.id).subscribe((data) => {
      this.annonce = data;
    });
  }

  updateAnnonce(): void {
    this.annonceService.updateAnnonce(this.id, this.annonce).subscribe(() => {
      this.router.navigate(['/annonces']);
    });
  }
}
