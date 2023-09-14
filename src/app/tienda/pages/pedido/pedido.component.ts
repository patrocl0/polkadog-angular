import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { data } from 'jquery';
import { Products } from '../../interfaces/store.interface';

interface carrito {
  id: number;
  nombre_producto: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: [],
})
export class PedidoComponent implements OnInit {
  public listaCarrito: Products[] = [];

  public contadorPrenda: number = 0;

  constructor(private readonly list: StoreService) {}

  ngOnInit(): void {
    console.log(this.list.listaProductos);

    this.listaCarrito = this.list.listaProductos;

    this.listaCarrito.map((item) => {
      if (!item.cantidad || item.cantidad == undefined) {
        item.cantidad = 1;
      }
    });
  }

  addContadorPrenda(item: any) {
    this.listaCarrito.filter((data) => {
      if (data.idproducto == item.idproducto) {
        if (data.cantidad === undefined) {
          data.cantidad = 1;
        } else {
          data.cantidad = data.cantidad + 1;
        }
      }
    });
  }

  deleteContadorPrenda(item: any) {
    this.listaCarrito.filter((data) => {
      if (data.idproducto == item.idproducto) {
        if (data.cantidad === undefined) {
          data.cantidad = 1;
        } else {
          data.cantidad = data.cantidad - 1;
        }
      }
    });
  }
}
