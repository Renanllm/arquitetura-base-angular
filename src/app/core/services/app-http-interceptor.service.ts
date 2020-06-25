import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeadersNameEnum } from 'src/app/shared/shared-models/enum/headers-name.enum';

export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let requestWithHeaders: HttpRequest<any>;

    // TO-DO: CRIAR SERVICE DE AUTENTICAÇÃO E VALIDAR SE USUÁRIO ESTÁ LOGADO;
    if (Boolean(false)) {
      const tokenValue = ''; // TO-DO: CRIAR MÉTODO NO SERVICE PARA OBTER TOKEN DO USUARIO LOGADO;

      requestWithHeaders = request.clone({
        headers: request.headers.set(HeadersNameEnum.AUTHORIZATION, tokenValue)
      });
    }

    const validUserLogged = Boolean(false);

    return next.handle(validUserLogged ? requestWithHeaders : request);
  }



}
