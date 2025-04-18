import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { BuscarProductoPage } from './pages/buscar-producto/buscar-producto.page';
import { CategoriasPage } from './pages/categorias/categorias.page';
import { TiendasPage } from './pages/tiendas/tiendas.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'buscar-producto',
    loadChildren: () => import('./pages/buscar-producto/buscar-producto.module').then( m => m.BuscarProductoPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'tiendas',
    loadChildren: () => import('./pages/tiendas/tiendas.module').then( m => m.TiendasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
