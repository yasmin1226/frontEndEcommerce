import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs";
import {CartModelServer} from "../../models/cart.model";

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // cartData: CartModelServer;
  // cartTotal: number;
  // subTotal: number;

  // constructor(public cartService: CartService) {
  // }

  // ngOnInit() {
  //    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  //    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  // }
  cartData:CartModelServer;
  cartTotal : number;
  subTotal :  number;

  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe((data:CartModelServer) =>{
      this.cartData = data;
    });
    this.cartService.cartTotal$.subscribe((total) =>{
      this.cartTotal = total;
    })
  }

  ChangeQuantity(id: number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(id, increaseQuantity);
  }

}