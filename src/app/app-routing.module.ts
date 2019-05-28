import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { AltaComponent } from './alta/alta.component';
import { DetalleComponent } from './detalle/detalle.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'alta',
    component: AltaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
