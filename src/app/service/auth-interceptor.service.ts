import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
​
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('This is From Interceptor');
        return next.handle(req);
    }
}