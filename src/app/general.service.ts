import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Column } from './column.type';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private serviceUrl = 'assets/data.json';

  constructor(private http:HttpClient) { }

  getUsers():Observable<Column[]> {
    return this.http.get<Column[]>(this.serviceUrl)
  }

}
