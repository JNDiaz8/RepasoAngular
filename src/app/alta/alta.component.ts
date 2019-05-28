import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LibrosService } from '../servicios/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  libro: Libro;

  constructor(
    private servicio: LibrosService,
    private router: Router
  ) {
    this.libro = {id: null, isbn: '', editorial: '', titulo: '' }
  }

  ngOnInit() {
  }

  alta() {
    this.servicio.altaLibro(this.libro).subscribe(
      () => {
        console.log('Se ha creado nuevo libro');
        this.router.navigateByUrl('/lista');
      },
      () => {
        console.log('Error al crear nuevo libro');
      }
    );

  }

  atras() {
    this.router.navigateByUrl('/lista');
  }

}
