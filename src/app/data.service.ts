import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Share } from './shares/share';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  findAllSharesURL = "shares/";
  createShareURL = "shares/";
  createUserURL = "users/";
  constructor(private http: HttpClient) { }

  public getShares(): Promise<Share[]> {
    return this.http.get<Share[]>(this.findAllSharesURL).toPromise();
  }

  public createUser(data:any): Observable<any> {
      return this.http.post(this.createUserURL, data);
  }

  /*public createAmigo(amigo:Amigo): Promise<Amigo> {
      return this.http.post<Amigo>(this.createAmigoURL, amigo).toPromise();
  }*/

  public createShare(data:any): Observable<any> {
    return this.http.post(this.createShareURL, data);
  }
}
