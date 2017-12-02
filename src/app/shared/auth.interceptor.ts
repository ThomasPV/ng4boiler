import { HttpInterceptor,HttpRequest, HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducers';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    return this.store.select('auth')
      .take(1)
      .switchMap((authState: fromAuth.State) =>{
        console.log(authState.token);
        const modReq = req.clone({params: req.params.set('auth', authState.token)});
        return next.handle(modReq);

      });



  }

  constructor(private store: Store<fromApp.AppState>){}

}
