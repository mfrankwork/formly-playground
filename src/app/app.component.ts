import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>

    <pre>Form value: {{ form.value | json }}</pre>
    <pre>Model value: {{ model | json }}</pre>
  `,
  styles: [],
})
export class AppComponent {
  form = new FormGroup({});
  model: Record<string, unknown> = { firstRepeat: [] };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstRepeat',
      type: 'repeat1',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add another investment',
        },
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'investmentDate',
            className: 'col-sm-4',
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            key: 'secondRepeat',
            type: 'repeat2',
            expressions: {
              hide: (field: FormlyFieldConfig) => {
                // access to the main model can be through `this.model` or `formState`
                // access to repeat2 model is just `model`
                // but how can I access the model of the parent repeat object ?
                console.log('hideExpression');
                console.log(field.model);
                console.log(field.options?.formState);

                return field.model.investmentName === 'asd';
              },
            },
            fieldArray: {
              fieldGroupClassName: 'row',
              templateOptions: {
                btnText: 'Add another investment',
              },
              fieldGroup: [
                {
                  className: 'col-sm-4',
                  type: 'input',
                  key: 'investmentName2',
                  templateOptions: {
                    label: 'Name of Investment:',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'investmentDate2',
                  className: 'col-sm-4',
                  templateOptions: {
                    type: 'date',
                    label: 'Date of Investment:',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];
  options: FormlyFormOptions = {
    formState: {
      mainModel: this.model,
    },
  };

  onSubmit(model: any): void {
    console.log(model);
  }
}
