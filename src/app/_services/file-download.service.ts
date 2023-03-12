import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  public downloadFileFromURL(url:string) {
    this.http.get(url, {
      observe: 'response',
      responseType: 'blob'
    }).subscribe(resp => {
      console.log(resp.headers.get('content-disposition').split('=')[1])
      saveAs(resp.body, resp.headers.get('content-disposition').split('=')[1]);
    });
  }

}
