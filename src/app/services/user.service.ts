import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUserById(id: number): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get(url);
  }
}
