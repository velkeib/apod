import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  apiKey = 'SLvKtwXX3l9pYBJJIU3Vnmt1szpxqkPOHJdxCWlh';

  constructor(private httpClient: HttpClient) { }

  getPicture(param: string): Observable<any>{
    return this.httpClient.get('https://api.nasa.gov/planetary/apod?api_key=' + this.apiKey + param);
  }

}
