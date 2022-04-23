import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Curso } from './curso';
@Injectable({
  providedIn: "root"
})
export class CursoService {
  private urlEndPoint: string = 'http://localhost:8091/api/cursos/listar';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Curso[])
    );
  }

}