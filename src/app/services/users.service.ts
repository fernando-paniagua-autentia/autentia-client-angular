import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  findAllUsers = "users/";
  constructor(private http: HttpClient) { }
  
  public getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.findAllUsers).toPromise();
  }
}
