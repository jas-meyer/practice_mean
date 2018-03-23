import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
	import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any;
trustedImg: any;
  constructor(
    private _httpService: ProductService,
    private sanitizer: DomSanitizer
  ) {
    
  }

  ngOnInit() {
 this.All()
  }
  All(){
    let getAll = this._httpService.getProducts();
    // this.trustedImg = this.sanitizer.bypassSecurityTrustUrl(this.products.iurl);
    // delete (this.products).iurl;
    // (this.products).iurl = this.trustedImg;
    getAll.subscribe(data => {

      console.log("Got the products!",data)

      this.products = data;
    })
  }
  Delete(id){

    let deleteOne = this._httpService.deleteProduct(id);
    deleteOne.subscribe(data =>{
      console.log("Deleting an author!", data)
      this.All()
  })

  }
}
