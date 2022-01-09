import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/* Cocktails service */
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  public getData(url: string) {
    return this.http.get(url);
  }
}
