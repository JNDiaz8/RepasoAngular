import { Component, OnInit } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LibrosService } from '../servicios/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  libro: Libro;

  constructor(
    private servicio: LibrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.servicio.getLibro(id).subscribe(
        (l) => {
          this.libro = l;
        }
    );
  }

  update() {
    this.servicio.updateLibro(this.libro).subscribe(
      () => {
        console.log("Se ha modificado");
        this.router.navigateByUrl('/lista');
      },
      () => {
        console.log("Error al modificar");
      }
    );
  }

}
