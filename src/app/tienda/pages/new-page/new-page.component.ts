import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Categorias } from '../../interfaces/store.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  productForm: FormGroup;

  listCategorias: Categorias[] = [];
  isSubmitted = false;
  constructor(
    private readonly storeService: StoreService,
    private readonly fb: FormBuilder
  ) {
    this.productForm = fb.group({
      idcategoria: [0, Validators.required],
      nombre_producto: ['', Validators.required],
      precio: [0, Validators.required],
      imagen: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategoria();
    this.storeService.createProduct(this.productForm.value);
    this.storeService
      .getProductById(3)
      .subscribe((response) => console.log(response));
  }

  // productForm = new FormGroup({
  //   idcategoria: new FormControl(''),
  //   nombre_producto: new FormControl(''),
  //   precio: new FormControl(''),
  //   imagen: new FormControl(''),
  // });

  createProduct() {
    this.isSubmitted = true;
    if (!this.productForm.valid) {
      console.log('Faltan datos');
    } else {
      this.storeService
        .createProduct(this.productForm.value)
        .then((response) => {
          if (response) {
            alert('El usuario se creo correctamente');
            this.productForm.reset();
          }
        });
    }
  }

  getCategoria() {
    this.storeService.getCategorias().subscribe((response) => {
      this.listCategorias = response;
      console.log(this.listCategorias);
    });
  }
  getProductById() {}

  prueba() {
    console.log(this.productForm.value);
  }
}
