export interface Products {
  idproducto?: number;
  idcategoria: number;
  nombre_producto: string;
  precio: string;
  imagen: string;
  cantidad?: number;
}

export interface Categorias {
  idcategoria?: number;
  nombrecategoria: string;
}
