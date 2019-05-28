import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LibrosService } from '../servicios/libros.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  libro: Libro;

  constructor(
    private servicio: LibrosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.servicio.getLibro(id).subscribe(
      (l) => {
        this.libro = l;
      }
    );
  }

  atras() {
    this.router.navigateByUrl('/lista');
  }

  editar() {
    this.router.navigateByUrl('/update/' + this.libro.id);
  }

  /*borrar() {
    this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
        this.servicio.borrarLibro(params.get('id')))
    ).subscribe(
      () => {
        console.log('Se ha borrado correctamente');
        this.router.navigateByUrl('/lista');
      },
      (error) => {
        console.log('No ha borrado correctamente');
        this.router.navigateByUrl('/lista');
      }
    );

  }*/

  borrar() {
   let id =  this.route.snapshot.paramMap.get('id');

   this.servicio.borrarLibro(id).subscribe(
     () => {
      console.log("Borrado correctamente");
      this.router.navigateByUrl('/lista');
     }
   );
  }

}
