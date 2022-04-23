import { Component, OnInit } from '@angular/core';

import {Curso } from './curso'
import { CursoService } from './curso.service';
import {CURSOS} from './curso.json'


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos ?: Curso[];

  //constructor() { 
      constructor(private cursoService: CursoService) { //}//se inyecta el Service

  }

  ngOnInit(): void {
    this.cursos = CURSOS;

    this.cursoService.getCursos().subscribe(
     cursos => this.cursos = cursos
    );
  }

}
