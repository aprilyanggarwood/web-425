/*
 Title: wishlist.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
Description: Assignment 8.2 – Server-side Communications
 Resources: Material Design https://material.angular.io/components
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = []

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item)
  }


}
