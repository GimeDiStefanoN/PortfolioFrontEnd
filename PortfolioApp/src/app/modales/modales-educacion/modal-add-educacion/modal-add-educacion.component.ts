import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-educacion',
  templateUrl: './modal-add-educacion.component.html',
  styleUrls: ['./modal-add-educacion.component.css']
})
export class ModalAddEducacionComponent implements OnInit {
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
        console.log('Add OK');
        console.log(this.form.value);
        alert('Se agrego con Exito')
        this.form.reset();
      }
}
