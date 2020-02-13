import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../models/shoppingitem';
import { ShoppingItemService } from '../services/shopping-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  shoppingItem$: Observable<ShoppingItem>;
  id: number;
  constructor(private shoppingItemService: ShoppingItemService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if(this.avRoute.snapshot.params[idParam]){
      this.id = this.avRoute.snapshot.params[idParam];
    }
   }

  ngOnInit(): void {
    this.loadShoppingItem();
  }

  loadShoppingItem() {
    this.shoppingItem$ = this.shoppingItemService.getShoppingItem(this.id);
  }

}
