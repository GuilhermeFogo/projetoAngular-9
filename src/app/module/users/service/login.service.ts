import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private http: HttpClient
private url: string;
  constructor(http: HttpClient) {
    this.http = http;
    this.url ="";
   }


   getUser(): Observable<User[]>{
     return this.http.get<User[]>(this.url);
   }

   postUser(user: User): Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>(this.url,user.Id);
  }

  deleteUser(user: User): Observable<User>{
    return this.http.delete<User>(this.url);
  }

  loginUser(u:User): Observable<User>{
    return this.http.post<User>(this.url, u);
  }
}
