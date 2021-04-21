import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root',
})
export class BaseUrlInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url =`${environment.apiUrl}/${req.url}`

    const newRequest: HttpRequest<unknown> = req.clone({ url })
    return next.handle(newRequest)
  }
}
