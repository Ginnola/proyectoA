import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private urlApi = 'http://192.168.0.13:3000/estudiantes';

  constructor(private http: HttpClient) { }

  public getEstudiantes(): Observable<any>{
    return this.http.get(this.urlApi);
  }

  public guardarEstudiante(nuevo_estudiante: any): Observable<any>{
    return this.http.post(this.urlApi, nuevo_estudiante);
  }
}
