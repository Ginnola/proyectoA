import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RestApiService } from '../../../service/api.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  formNuevoEstudiante: FormGroup;
  constructor(private servicioRest: RestApiService){
    this.formNuevoEstudiante = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('',[Validators.required, Validators.minLength(3)]),
      edad: new FormControl('',[Validators.required, Validators.minLength(1)]),
      carrera: new FormControl('',Validators.required),
    });
  }

  //UN POST
  public guardarDatosEstudiante() : void{
    if(this.formNuevoEstudiante.valid){
      const datosEstudiante = this.formNuevoEstudiante.value;
      this.servicioRest.guardarEstudiante(datosEstudiante).subscribe(datos => {
        console.log("El nuevo estudiante fue registrado correctamente");
        console.log(datos);
      });
    }else{
      console.error("El formulario esta vació");
    }
    
  }

  public limpiarFormulario() {
    this.formNuevoEstudiante.reset();
  }
}
