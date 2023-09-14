import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styles: [],
})
export class NewCategoryComponent {
  categoriaForm: FormGroup;

  isSubmitted = false;
  constructor(
    private readonly storeService: StoreService,
    private readonly fb: FormBuilder
  ) {
    this.categoriaForm = fb.group({
      nombrecategoria: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  createCategoria() {
    this.isSubmitted = true;
    if (!this.categoriaForm.valid) {
      console.log('Faltan datos');
    } else {
      this.storeService
        .createCategoria(this.categoriaForm.value)
        .then((response) => {
          console.log(response);

          if (response) {
            alert('La categoria se creo correctamente');
            this.categoriaForm.reset();
          }
        });
    }
  }
}
