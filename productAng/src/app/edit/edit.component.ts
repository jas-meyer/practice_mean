import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: string;
product: object;
datas: any;
errmessage: any;

  constructor(private _route: ActivatedRoute,
    private _httpService: ProductService,
  private _router: Router,
) {
    this.product = {title: "", price: "", iurl: ""}
     }

  ngOnInit() {
  this.oneProduct()
  }
  oneProduct(){
      this._route.params.subscribe((params: Params) =>  this.id = params['id'])
      let getOne = this._httpService.editProduct(this.id);
      getOne.subscribe(data => {
      console.log("Got the product!",data)
      this.product = data;
      console.log(this.product);
      })
    }
    update(event){
      event.preventDefault()
      this._route.params.subscribe((params: Params) =>  this.id = params['id'])
      console.log(this.id)
      console.log(this.product)
      let update = this._httpService.updateProduct(this.id, this.product);
      update.subscribe(data => {
      this.datas = data
        if ((this.datas).message == "Error") {
          console.log(this.datas);
          this.errmessage = (this.datas).err.message

        }
        else{
        console.log("Updating the product", this.datas)
        this.product= {title: "", price: "", img: ""}
        this._router.navigate(['products']);
       }
         });
}
Delete(id){

  let deleteOne = this._httpService.deleteProduct(id);
  deleteOne.subscribe(data =>{
    console.log("Deleting an author!", data)
    this._router.navigate(['products']);
})

}
}
