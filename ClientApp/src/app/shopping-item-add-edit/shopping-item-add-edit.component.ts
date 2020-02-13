import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShoppingItemService } from '../services/shopping-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingItem } from '../models/shoppingitem';

@Component({
  selector: 'app-shopping-item-add-edit',
  templateUrl: './shopping-item-add-edit.component.html',
  styleUrls: ['./shopping-item-add-edit.component.scss']
})
export class ShoppingItemAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formName: string;
  formDetails: string;
  formIsTaken: string;
  id: number;
  errorMsg: any;
  existingShoppingItem: ShoppingItem;

  // tslint:disable-next-line: max-line-length
  constructor(private shoppingItemService: ShoppingItemService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formName = 'name';
    this.formDetails = 'details';
    this.formIsTaken = 'isTaken';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        id: 0,
        name: ['', [Validators.required]],
        details: ['', [Validators.required]],
        isTaken: false,
      }
    );
  }

  ngOnInit(): void {
    if (this.id > 0) {
      this.actionType = 'Edit';
      this.shoppingItemService.getShoppingItem(this.id)
        .subscribe((data) => (
          this.existingShoppingItem = data,
          this.form.controls[this.formName].setValue(data.name),
          this.form.controls[this.formDetails].setValue(data.details),
          this.form.controls[this.formIsTaken].setValue(data.isTaken)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let shoppingItem: ShoppingItem = {
        name: this.form.get(this.formName).value,
        details: this.form.get(this.formDetails).value,
        isTaken: Boolean(this.form.get(this.formIsTaken).value)
      };

      this.shoppingItemService.saveShoppingItem(shoppingItem)
        .subscribe((data) => {
          this.router.navigate(['/shoppingitem', data.id]);
        });
    }

    if (this.actionType === 'Edit') {
      let shoppingItem: ShoppingItem = {
        id: this.existingShoppingItem.id,
        name: this.form.get(this.formName).value,
        details: this.form.get(this.formDetails).value,
        isTaken: this.form.get(this.formIsTaken).value
      };

      this.shoppingItemService.updateShoppingItem(shoppingItem.id, shoppingItem)
        .subscribe((data) => {
          this.router.navigate(['/']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get name() { return this.form.get(this.formName); }
  get details() { return this.form.get(this.formDetails); }
  get isTaken() { return this.form.get(this.formIsTaken); }
}
