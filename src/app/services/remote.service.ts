import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RemoteService {
  private url = 'https://www.igniteui.com/api/products';
  private _remoteData: BehaviorSubject<any[]>;

  constructor(private _http: HttpClient) {
    this._remoteData = new BehaviorSubject<any[]>([]);
    this.remoteData = this._remoteData.asObservable();
  }

  public remoteData: Observable<any[]>;

  public getData(): any {
    return this._http
      .get(`${this.url}`)
      .pipe(map((data: any) => data))
      .subscribe((data) => this._remoteData.next(data));
  }
}
