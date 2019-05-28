import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url);
  }

  getLibro(id: string): Observable<Libro> {
    return this.http.get<Libro>(this.url + '/' + id)
  }

  borrarLibro(id: string): Observable<Libro> {
    return this.http.delete<Libro>(this.url + '/' + id);
  }

  altaLibro(libro: Libro) {
    return this.http.post<Libro>(this.url, libro);
  }

  updateLibro(libro: Libro) {
    return this.http.put<Libro>(this.url + '/' + libro.id, libro);
  }

}
