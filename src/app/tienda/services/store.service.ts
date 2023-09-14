import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorias, Products } from '../interfaces/store.interface';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response',
};

const mensaje: string = '';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  @Output() disparadorShopping: EventEmitter<any> = new EventEmitter();
  @Output() categoriaChange: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  BASE_URL: string = 'http://localhost:3000';

  listaProductos: Products[] = [];

  bandera = false;

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.BASE_URL}/producto`);
  }

  getCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.BASE_URL}/categoria`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/producto/${id}`);
  }

  async createProduct(producto: any) {
    this.http
      .post<any>(`${this.BASE_URL}/producto/crear`, producto)
      .subscribe((response) => {
        console.log(response);
        if (response) {
          this.bandera = true;
        }
      });

    return this.bandera;
  }

  async createCategoria(categoria: any) {
    this.http
      .post<any>(`${this.BASE_URL}/categoria/crear`, categoria)
      .subscribe((response) => {
        if (response.message) {
          this.bandera = true;
        }
      });

    return this.bandera;
  }

  async getProductosByCategoria(id: number) {
    return this.http.get<any>(`${this.BASE_URL}/producto`);
  }

  updateProduct(id: number, producto: any) {}
  deleteProduct() {}
}
