import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { Command } from 'protractor';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }
id : number
  ngOnInit() {
    
    // this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
    //   this.products = prods.products;
    //   console.log(this.products);
    // });
    this.getProducts();

    this.getAllProducts2();
    //this.AddProduct( 1);
  }

  AddProduct(id: number) {
    this.cartService.AddProductToCart(id);
    window.alert('Your product has been added to the cart!');

    console.log('Added')
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }
  productss

  getProducts(){
    this.productService.getAllProducts().subscribe((products)=>{
     // console.log(prods)
      this.productss = products;
      //console.log(prods['data']);
     // console.log(prods['data'].products);
    },err=>{
      console.log(err);
  
    })
  }
  getAllProducts2(){
    this.productService.getAllProducts().subscribe(
      (products)=>{
        console.log(products)
       this.productss = products     },
      (err)=>{
        console.log(err)
      }
    )
  }
}
