import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Products } from '../../interfaces/store.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
  constructor(private readonly productService: StoreService) {}

  @Input() dataEntrante: any;

  listProducts: Products[] = [];
  listProductsShopping: Products[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.listProducts = response;
    });
  }

  addCarShopping(producto: Products) {
    if (this.productService.listaProductos.includes(producto)) {
      alert('Producto añadido');
      return;
    }

    this.productService.listaProductos.push(producto);

    this.productService.disparadorShopping.emit({ data: producto });
  }

  getListProducts() {}
}
