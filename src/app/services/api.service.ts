import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const API_BASE_URL = environment.API_URL;
const ERROR_WHITELIST = [];

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Language': this.locale
    }),
    observe: 'response'
  };

  post<T>(path: string, body?, options?: any): Observable<T> {
    options = Object.assign({}, options, { body });
    return this.request<T>('POST', path, options);
  }

  get<T>(path: string, options?: any): Observable<T> {
    return this.request<T>('GET', path, options);
  }

  request<T>(method: string, path: string, options?: any): Observable<T> {
    options = Object.assign({}, this.defaultHttpOptions, options);
    return this.http
      .request<HttpResponse<T>>(method, this.buildPath(path), options)
      .pipe(map(this.formatResponse), catchError((httpError: HttpErrorResponse) => this.handleError(httpError, path)));
  }

  private buildPath(path) {
    const urlPath = path.startsWith('/') ? path.slice(1) : path;
    return `${API_BASE_URL}${urlPath}`;
  }

  private formatResponse(res: HttpResponse<any>) {
    const { body } = res;

    if (body === null || !(body instanceof Object) || !Object.keys(body).includes('data')) {
      return body;
    } else {
      return body.data;
    }
  }

  private handleError(httpError: HttpErrorResponse, path: string) {
    if (!ERROR_WHITELIST.includes(path)) {
      console.error('Oops! Something went wrong. Please try again later.');
    }

    // Get the "errors" property of the response body if it exists,
    // otherwise get the entire response body.
    const errorResponse = httpError.error.errors || httpError.error;
    return throwError(errorResponse);
  }

}
