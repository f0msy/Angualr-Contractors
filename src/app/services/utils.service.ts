import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  
  constructor(private databaseService: DatabaseService, private http: HttpClient) { }


  postData<T>(dir: string, value: T) {
    console.log(dir, value);
    
    return this.http
    .post<any>(`${this.databaseService.url}/${dir}.json`, value)
    .pipe(map(res => {
        return res
    }))
  }

  getData(dir: string) {
    return this.http.get<any>(`${this.databaseService.url}/${dir}.json`)
    .pipe(map(res => {
      return res
    }))
  }

  sendData<T>(dir: string, value: T) {
    if (false) {
      return this.http.put<any>(`${this.databaseService.url}/${dir}.json`, value).pipe(map(res => {
        return res
      }))
    } else {
      return this.postData(dir, value)
    }    
  }
}
