import { Injector, forwardRef, NgZone, ChangeDetectorRef, ElementRef, Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OComponent, OFormComponent, OntimizeService, dataServiceFactory } from 'ontimize-web-ngx';
import { ODynamicFormBuilderComponent } from 'ontimize-web-ngx-dynamicform-builder';

@Component({
  selector: 'dynamicforms-new-form',
  providers: [
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    {
      provide: OFormComponent,
      useExisting: forwardRef(() => DynamicFormsNewFormComponent)
    }
  ],
  templateUrl: './o-form.component.html',
  inputs: OFormComponent.DEFAULT_INPUTS_O_FORM,
  outputs: OFormComponent.DEFAULT_OUTPUTS_O_FORM,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-form]': 'true',
    '[class.fill]': 'layoutFill'
  }
})
export class DynamicFormsNewFormComponent extends OFormComponent {

  dynamicFormBuilder: ODynamicFormBuilderComponent;

  constructor(
    router: Router,
    actRoute: ActivatedRoute,
    zone: NgZone,
    cd: ChangeDetectorRef,
    injector: Injector,
    elRef: ElementRef
  ) {
    super(router, actRoute, zone, cd, injector, elRef);
  }

  public getAttributesValuesToInsert(): Object {
    let attrValues = super.getAttributesValuesToInsert();
    if (this.dynamicFormBuilder) {
      let json: any = this.dynamicFormBuilder.formDefinition;
      if (json.components.length) {
        attrValues['JSON'] = JSON.stringify(json);
      }
    }
    return attrValues;
  }

  setFormBuilder(builder: ODynamicFormBuilderComponent) {
    this.dynamicFormBuilder = builder;
  }

}
