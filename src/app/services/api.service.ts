import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private SERVER_URL = "http://localhost:3000";

  public fetchData() {
    return this.httpClient.get(`${this.SERVER_URL}/dieux`)
  }
}
