import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public url = 'https://angular-grid-8f2c6-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) { }
  getData(dir: string) {
    return this.http.get<any>(`${this.url}/${dir}`)
    .pipe(map(res => {
      return res
    }))
  }
}
