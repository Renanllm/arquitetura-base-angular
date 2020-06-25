import { Injectable } from '@angular/core';
import { objectIsEmpty } from 'src/app/shared/utils/object-methods';
import propertyIsValid from 'src/app/shared/utils/property-methods';
import { HttpObjectParams } from './../../shared/shared-models/interface/http-object-params.interface';

@Injectable()
export class HttpUtilsService {

  mapHttpResquestParams(objectWithParams: Object): HttpObjectParams {
    const httpParams: HttpObjectParams = {};

    if (objectWithParams != null && !objectIsEmpty(objectWithParams)) {
      for (const objectKey in objectWithParams) {
        const paramItem = objectWithParams[objectKey];

        if (propertyIsValid(paramItem)) {
          httpParams[objectKey] = String(objectWithParams[objectKey]);
        }        
      }
    }

    return httpParams;
  }
}
