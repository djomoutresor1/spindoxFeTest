import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService implements OnInit {

  
  constructor(
    private http: HttpClient
  ) { }
  
  ngOnInit(): void {
  }

  getAllData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api');
  }
  
}
