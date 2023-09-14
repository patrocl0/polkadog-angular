import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PrendaPageComponent } from './pages/prenda-page/prenda-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './pages/pedido/pedido.component';

@NgModule({
  declarations: [
    ListPageComponent,
    PrendaPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    NewCategoryComponent,
    PedidoComponent,
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class TiendaModule {}
