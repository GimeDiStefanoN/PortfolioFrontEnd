import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-educacion',
  templateUrl: './modal-edit-educacion.component.html',
  styleUrls: ['./modal-edit-educacion.component.css']
})
export class ModalEditEducacionComponent implements OnInit {
  form:FormGroup;
  logo!: string;
  web!: string;
  titulo!: string;
  inicio!: string;
  fin!: string;
  descripcion!: string;

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      id:[''],
      logo:['',[Validators.required]],
      web:['',[Validators.required]],
      titulo:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      descripcion:['',[Validators.required]],
  })
  }

  ngOnInit(): void {
  }
  //metodos
      //metodos para tomar datos
      get Logo(){
        return this.form.get("logo");
      }
      get Web(){
        return this.form.get("web");
      }
      get Titulo(){
        return this.form.get("titulo");
      }
      get Inicio(){
        return this.form.get("inicio");
      }
      get Fin(){
        return this.form.get("fin");
      }
      get Descripcion(){
        return this.form.get("descripcion");
      }

      campoValido(campo:string){
        return (this.form.controls[campo]?.errors && this.form.controls[campo]?.touched)  
      }
    
      enviar() {
        if(this.form.invalid){
          this.form.markAllAsTouched();
          return;
        }
        console.log('Edit OK');
        console.log(this.form.value);
        alert('Se modifico con Exito')
        this.form.reset();
      }
}
