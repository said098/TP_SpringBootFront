import {Component, OnInit} from '@angular/core';
import {Annonce} from '../../dtos/annoonce.dto';
import {AnnonceService} from '../../services/annonce.service';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './annonce-list.component.html',
  styleUrl: './annonce-list.component.css'
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService,private  router :Router) {
  }

  ngOnInit(): void {
    this.loadAnnonces();
  }

  loadAnnonces(): void {
    this.annonceService.getAllAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }

  deleteAnnonce(id: number | undefined): void {
    if (id) {
      this.annonceService.deleteAnnonce(id).subscribe(() => {
        this.loadAnnonces();
      });
    }
  }


    editAnnonce(id: number | undefined): void {
      if (id) {
        this.router.navigate(['/edit-annonce', id]);
      }


  }
}
