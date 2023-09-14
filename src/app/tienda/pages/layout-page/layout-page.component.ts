import { Component, Input, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { StoreService } from '../../services/store.service';
import { Categorias, Products } from '../../interfaces/store.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent implements OnInit {
  @Input() valor: any;
  @Input() valor2: any;

  public listaCarritoContador: Products[] = [];
  public listaCategorias: Categorias[] = [];

  constructor(private readonly list: StoreService) {}

  ngOnInit(): void {
    this.list.disparadorShopping.subscribe((data: any) => {
      this.listaCarritoContador.push(data.data);
    });

    this.list.getCategorias().subscribe((item) => {
      this.listaCategorias = item;
    });

    console.log(this.list.categoriaChange);
  }

  getCategoria(item: any) {
    console.log(item);

    // this.list.categoriaChange.emit({ data: producto });
  }
}

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});
