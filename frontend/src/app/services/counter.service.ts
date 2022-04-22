import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Counter, History } from '../components/counter/counter.component';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private http: HttpClient) { }

  public getHistory(): Observable<Counter[]> {
    return this.http.get<Counter[]>(environment.apiUrl + 'counter').pipe(
      map((data) => {
        return data
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

  public create(data: Counter) {
    return this.http.post(environment.apiUrl + 'counter', data).pipe(
      map((data) => {
        return data
      }),
      catchError((error) => {
        return throwError(error)
      })
    )
  }

}
