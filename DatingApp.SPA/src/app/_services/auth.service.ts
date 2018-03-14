import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    basuUrl = 'http://localhost:5000/api/auth';
    userToken: any;

constructor(private http: Http) { }

login(model: any) {
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.basuUrl + 'login', model, options).map((response: Response) => {
        const user = response.json();
        if (user) {
            localStorage.setItem('token', user);
            this.userToken = user.tokenString;
        }
    });
}

}