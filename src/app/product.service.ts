import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  _albumUrl = "../assets/album.json"

  constructor(private _http: HttpClient) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl)
  }

}
