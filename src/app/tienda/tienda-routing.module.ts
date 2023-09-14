import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PrendaPageComponent } from './pages/prenda-page/prenda-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'list-garment', component: ListPageComponent },
      { path: 'new-garment', component: NewPageComponent },
      { path: 'new-category', component: NewCategoryComponent },
      { path: 'list-pedido', component: PedidoComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: ':id', component: PrendaPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: '**', redirectTo: 'list-garment' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaRoutingModule {}
