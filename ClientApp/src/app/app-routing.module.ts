import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingItemAddEditComponent } from './shopping-item-add-edit/shopping-item-add-edit.component';

const routes: Routes = [
  { path: '', component: ShoppingItemsComponent, pathMatch: 'full'},
  { path: 'ShoppingItem/:id', component: ShoppingItemComponent },
  { path: 'Add', component: ShoppingItemAddEditComponent },
  { path: 'ShoppingItems/Edit/:id', component: ShoppingItemAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
