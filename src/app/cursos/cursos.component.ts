import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: String;

  cursos: String[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://angular.io/';

    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
