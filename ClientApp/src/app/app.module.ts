import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingItemAddEditComponent } from './shopping-item-add-edit/shopping-item-add-edit.component';
import { ShoppingItemService } from './services/shopping-item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemsComponent,
    ShoppingItemComponent,
    ShoppingItemAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ShoppingItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
