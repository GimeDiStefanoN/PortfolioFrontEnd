import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-proyectos',
  templateUrl: './modal-add-proyectos.component.html',
  styleUrls: ['./modal-add-proyectos.component.css']
})
export class ModalAddProyectosComponent implements OnInit {
  form:FormGroup;
  img!: string;
  nombre!: string;
  fecha!: string;
  descripcion!: string;
  urlcodigo!: string;
  urldemo!: string;

  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      img:['',[Validators.required]],
      nombre:['',[Validators.required]],
      fecha:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      urlcodigo:['',[Validators.required]],
      urldemo:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }
   //metodos
      //metodos para tomar datos
      get Img(){
        return this.form.get("img");
      }
      get Nombre(){
        return this.form.get("nombre");
      }
      get Fecha(){
        return this.form.get("fecha");
      }
      get Descripcion(){
        return this.form.get("descripcion");
      }
      get UrlCodigo(){
        return this.form.get("urlcodigo");
      }
      get UrlDemo(){
        return this.form.get("urldemo");
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
