import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../juegos/juegos.module').then(m => m.JuegosPageModule)
      },
      {
        path: 'proximamente',
        loadChildren: () => import('../nuevo/nuevo.module').then(m => m.NuevoPageModule)
      },
      {
        path: 'descargas',
        loadChildren: () => import('../descargas/descargas.module').then(m => m.DescargasPageModule)
      },
      {
        path: 'mas',
        loadChildren: () => import('../reir/reir.module').then(m => m.ReirPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
