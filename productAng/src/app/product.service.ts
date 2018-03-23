import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }
  getProducts(){

    return this._http.get('/product');
  }
  deleteProduct(id){
    console.log("id: ",id)
    return this._http.delete('/product/'+id)

  }
  editProduct(id){
    console.log(id)
    return this._http.get('/product/'+id);
  }
  addProduct(newProduct){
    return this._http.post('/product', newProduct)
  }
  updateProduct(id, update){
    return this._http.put('/product/'+id,update)
  }
}
