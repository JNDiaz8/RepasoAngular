import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelos/libro';
import { Observable } from 'rxjs';
import { LibrosService } from '../servicios/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  libros: Observable<Libro[]>;

  constructor(
    private servicio: LibrosService,
    private router: Router
    ) { }

  ngOnInit() {
    this.libros = this.servicio.getLibros();
  }

  nuevo() {
    this.router.navigateByUrl('alta');
  }

}
