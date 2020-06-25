import { HttpUtilsService } from './services/http-utils.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppHttpInterceptor } from './services/app-http-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ]
})

export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        HttpUtilsService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AppHttpInterceptor
        }
      ]
    }
  }

}
