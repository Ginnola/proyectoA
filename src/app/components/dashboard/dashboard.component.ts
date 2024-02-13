import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { RestApiService } from '../../service/api.service';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

 
  nombres_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera'];
  lista_estudiantes: Estudiante[] = [];

  //GET A ESTUDIANTES
  data: Estudiante[] = [];
  constructor(private servicioRest: RestApiService){
  }
  
  ngOnInit(): void {
    this.servicioRest.getEstudiantes().subscribe( datos =>{
      this.lista_estudiantes = datos;
      console.log(this.lista_estudiantes);
    });
  }
  
}
