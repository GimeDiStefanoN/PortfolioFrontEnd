import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-sobremi',
  templateUrl: './modal-sobremi.component.html',
  styleUrls: ['./modal-sobremi.component.css']
})
export class ModalSobremiComponent implements OnInit {
//inicializamos las variables que vamos a utilizar
form:FormGroup;
img!: string;
nombre!: string;
apellido!: string;
puesto!: string;
descripcion!: string;

  constructor(private formBuilder: FormBuilder) {
     //Creamos el grupo de controles para el formulario 
      this.form=this.formBuilder.group({
        id:[''],
        img:['',[Validators.required]],
        nombre:['',[Validators.required]],
        apellido:['',[Validators.required]],
        puesto:['',[Validators.required]],
        descripcion:['',[Validators.required]],
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
      get Apellido(){
        return this.form.get("apellido");
      }
      get Puesto(){
        return this.form.get("puesto");
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
        console.log('Modicacion OK');
        console.log(this.form.value);
        alert('Modicacion realizada con Exito')
        this.form.reset();
      }


}
