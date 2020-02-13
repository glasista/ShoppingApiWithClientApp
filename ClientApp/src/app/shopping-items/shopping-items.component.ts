import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItemService } from '../services/shopping-item.service';
import { ShoppingItem } from '../models/shoppingitem';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.scss']
})
export class ShoppingItemsComponent implements OnInit {
  shoppingItems$: Observable<ShoppingItem[]>;

  constructor( private shoppingItemService: ShoppingItemService) {
   }

  ngOnInit(): void {
    this.loadShoppingItems();
  }

  loadShoppingItems() {
    this.shoppingItems$ = this.shoppingItemService.getShoppingItems();
  }

  delete(id) {
    const ans = confirm('Na pewno chcesz usunąć wybrany element?');
    if (ans) {
      this.shoppingItemService.deleteShoppingItem(id).subscribe((data) => {
        this.loadShoppingItems();
      });
    }
  }
}
