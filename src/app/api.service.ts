import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class ApiService {
    //   responseSucces = new BehaviorSubject('No error');
    //   errorStatus = false;
    errorStatus = false;
    private API_URL = 'http://ec2-18-136-100-85.ap-southeast-1.compute.amazonaws.com:3000';
    // private API_URL = 'http://localhost:3000';

    constructor(
        private https: Http,
        private router: Router,
        @Inject(LOCAL_STORAGE) private storage: WebStorageService

    ) { }

    // private createAuthorizationHeader(headers: Headers) {
    //     headers.append('authorization', this.storage.get('jwt'));
    // }

    private getHeaders(): Headers {

        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        // const jwt = this.auth.idToken;
        // console.log('json web token ', jwt);
        // if (!isUndefined(jwt)) {
        //     headersConfig['Authorization'] = this.auth.idToken;
        // }
        // const jwt = this.jwtService.getToken();
        // if (jwt) { headersConfig['Authorization'] = Bearer ${jwt}; }
        headersConfig['authorization'] = this.storage.get('jwt');
        return new Headers(headersConfig);
    }

    private get(path: string): Observable<any> {
        return this.https.get(`${this.API_URL}/${path}/`)
            .catch(this.formatError)
            .map((res: Response) => res.json());
    }

    private post(path: string, body: Object = {}): Observable<any> {
        return this.https.post(`${this.API_URL}/${path}/`, body)
            .catch(this.formatError)
            .map((res: Response) => res.json());
    }

    private formatError(error: any) {
        console.error('ApiService::handleError', error);
        this.errorStatus = true;
        console.log('Server Erorr');
        return Observable.throw(error.json());
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        this.errorStatus = true;
        console.log('Server Erorr');
        return Observable.throw(error);
    }

    public getCourses(): Observable<any[]> {
        return this.https
            .get(`${this.API_URL}/courses/all`)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

    public getCoursesByUserId(id): Observable<any[]> {
        return this.https
            .get(`${this.API_URL}/courses/user/${id}`)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

    public registerUser(body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/users/signup`, body)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

    public loginUser(body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/users/login`, body)
            .map(response => {
                const payload = response.json();
                this.storage.set('jwt', payload.token);
                return payload;
            })
            .catch(this.formatError);
    }

    public getUserById(id): Observable<any[]> {

        return this.https
            .get(`${this.API_URL}/users/details/${id}`)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

    public getUser(): Observable<any[]> {
        const header = this.getHeaders();
        return this.https
            .get(`${this.API_URL}/users/userDetails`, { headers: header })
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }



    public updateUser(id, body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/users/update/${id}`, body)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }

    public deleteUser(id, body: any): Observable<any[]> {
        return this.https
            .post(`${this.API_URL}/users/delete/${id}`, body)
            .map(response => {
                const payload = response.json();
                return payload;
            })
            .catch(this.formatError);
    }
}
