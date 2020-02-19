import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
   
   intercept(req: HttpRequest<any>, next: HttpHandler){
       console.log('request is on the way');
       console.log(req.url);
       const modifiedRequest = req.clone({ headers: req.headers.append('Auth','xyyx')})
       return next.handle(modifiedRequest).pipe(tap(event => {
           console.log(event);
           if(event.type === HttpEventType.Response){
            console.log("response arrived, body data: ");
            console.log(event.body);
           }
       }));
   }
}