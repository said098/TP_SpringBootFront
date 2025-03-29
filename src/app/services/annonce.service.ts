import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Annonce} from '../dtos/annoonce.dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private readonly API = environment.apiUrl;
  private readonly endpoint = 'annonces';

  constructor(private httpClient: HttpClient,) {}

  getAllAnnonces(): Observable<Annonce[]> {
    return this.httpClient.get<Annonce[]>('/api/annonces');
  }


  getAnnonceById(id: number): Observable<Annonce> {
    return this.httpClient.get<Annonce>(`/api/annonces/${id}`);
  }

  updateAnnonce(id: number, annonce: Annonce): Observable<Annonce> {
    return this.httpClient.put<Annonce>(`/api/annonces/${id}`, annonce);
  }

  createAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.httpClient.post<Annonce>('/api/annonces', annonce);
  }
  deleteAnnonce(id: number): Observable<any> {
    return this.httpClient.delete(`/api/annonces/${id}`);
  }
}
