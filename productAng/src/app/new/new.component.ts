import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
product: object;
errmessage: string;
datas: any;
  constructor(
    private _router: Router,
    private _httpService: ProductService
  ) {
    this.product= {title: "", price: "", img: ""}
  }

  ngOnInit() {
  }
  Create(){
    console.log(this.product)
    let add = this._httpService.addProduct(this.product);
     add.subscribe(data => {
       this.datas = data
      if (this.datas.message == "Error") {
        console.log(this.datas);
        this.errmessage = this.datas.err.message

      }
      else{
      console.log("Adding a product!",data)
      this.product= {title: "", price: "", img: ""}
      this._router.navigate(['products']);
     }
  });
  }
}
