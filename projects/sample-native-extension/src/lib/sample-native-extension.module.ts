import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationService } from '@upscale/web-storefront-sdk';
import { EmployeeOnlyStoreGuardService, EmployeeOnlyStoreGuardComponent } from './employee-only-store-guard';
import { InjectScriptService } from './inject-script';

const components = [
  EmployeeOnlyStoreGuardComponent,
]


@NgModule({
  declarations: [...components],
  imports: [ CommonModule ],
  exports: [...components]
})
export class UpscaleExtensionModule {

  constructor(
    private registrationServices: RegistrationService,

    // eagerly loaded custom service
    // private employeeService: EmployeeOnlyStoreGuardService
    // private injectScriptService: InjectScriptService
  ) {
     //register components

    this.registrationServices.register(
      "employee-only-store-component",
      EmployeeOnlyStoreGuardComponent
    )
  }

}
