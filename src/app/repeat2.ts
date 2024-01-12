import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section2',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index">
      <formly-field [field]="field"></formly-field>
      <!-- <formly-group [model]="model[i]" [field]="field" [options]="options" [form]="formControl"> </formly-group> -->
      <div class="col-md-2">
        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" type="button" (click)="add()">Add More Repeat2</button>
    </div>
  `,
})
export class Repeat2TypeComponent extends FieldArrayType {}
