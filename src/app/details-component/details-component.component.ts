import { Component, OnInit } from '@angular/core';
import { stock } from '../stock';
@Component({
  selector: 'app-details-component',
  template: `
  <style>
body {
    background-color: #000
}

.card {
    border: none
}

.product {
    background-color: #eee
}

.brand {
    font-size: 13px
}

.act-price {
    color: red;
    font-weight: 700
}

.dis-price {
    text-decoration: line-through
}

.about {
    font-size: 14px
}

.color {
    margin-bottom: 10px
}

label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    padding: 2px 9px;
    border: 2px solid #ff0000;
    display: inline-block;
    color: #ff0000;
    border-radius: 3px;
    text-transform: uppercase
}

label.radio input:checked+span {
    border-color: #ff0000;
    background-color: #ff0000;
    color: #fff
}

.btn-danger {
    background-color: #ff0000 !important;
    border-color: #ff0000 !important
}

.btn-danger:hover {
    background-color: #da0606 !important;
    border-color: #da0606 !important
}

.btn-danger:focus {
    box-shadow: none
}

.cart i {
    margin-right: 10px
}
  </style>
  
  <div class="container mt-5 mb-5">
  <div class="row d-flex justify-content-center">
      <div class="col-md-10">
          <div class="card">
              <div class="row">
                  <div class="col-md-6">
                      <div class="images p-3">
                          <div class="text-center p-4"> <img id="main-image" src={{stock.ImageUrl}} width="250" /> </div>
                          <div class="thumbnail text-center"> <img onclick="change_image(this)" src={{stock.ImageUrl}} width="70"> <img onclick="change_image(this)" src={{stock.ImageUrl}}  width="70"> </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="product p-4">
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                          </div>
                          <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">AnaCart</span>
                              <h5 class="text-uppercase">{{stock.ItemName}}</h5>
                              <div class="price d-flex flex-row align-items-center"> <span class="act-price">{{stock.Price}}</span>
                                  <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div>
                              </div>
                          </div>
                          <p class="about">{{stock.Caption}}</p>
                          <div class="sizes mt-5">
                              <h6 class="text-uppercase">Size</h6> <label class="radio"> <input type="radio" name="size" value="S" checked> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M"> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L"> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL"> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL"> <span>XXL</span> </label>
                          </div>
                          <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
`,
})
export class DetailsComponentComponent implements OnInit {
  

  stocks:stock[] |any;
  stock:any;
  ren:any;


  constructor() {
  }
  ngOnInit(): void {
    this.ren=localStorage.getItem("currentselecteditem");
    this.stock=JSON.parse(this.ren);
    return this.stock;
  }
}
