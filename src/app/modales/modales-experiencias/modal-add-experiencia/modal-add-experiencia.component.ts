import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-experiencia',
  templateUrl: './modal-add-experiencia.component.html',
  styleUrls: ['./modal-add-experiencia.component.css']
})
export class ModalAddExperienciaComponent implements OnInit {
  form:FormGroup;
  logo!: string;
  puesto!: string;
  inicio!: string;
  fin!: string;
  descripcion!: string;
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      logo:['',[Validators.required]],
      puesto:['',[Validators.required]],
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
      get Puesto(){
        return this.form.get("puesto");
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
        alert('Se agregó con Exito')
        this.form.reset();
      }
}
