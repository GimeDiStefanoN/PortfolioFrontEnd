import { Component, OnInit } from '@angular/core';
// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
//inicializamos las variables que vamos a utilizar
  form: FormGroup;
  nombreUsuario!: string;
  password!: string;

  constructor(private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      nombreUsuario:['',[Validators.required, Validators.minLength(5)]],      
      password:['', [Validators.required, Validators.minLength(8)]],
      
   })
  }

  ngOnInit(): void {
  }
  //metodos
    //metodos para tomar datos
      get Nombre(){
        return this.form.get("nombreUsuario");
      }
    
      get Password(){
        return this.form.get("password");
      }
    //metodo para validar
   
      campoValido(campo:string){
        return (this.form.controls[campo]?.errors && this.form.controls[campo]?.touched)  
      }
    
      enviar() {
        if(this.form.invalid){
          this.form.markAllAsTouched();
          return;
        }
        console.log('Inicio de sesión OK');
        console.log(this.form.value);
        alert('Inicio de sesión con Exito')
        this.form.reset();
      }      
    
      limpiar(): void{
        this.form.reset();
      }
    
    
}
