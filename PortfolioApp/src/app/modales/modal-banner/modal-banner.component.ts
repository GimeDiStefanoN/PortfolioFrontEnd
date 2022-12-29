import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
//inicializamos las variables que vamos a utilizar
form:FormGroup;
banner!: string;
nombre!: string;
apellido!: string;
puesto!: string;
frase!: string;

  constructor(private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      banner:['',[Validators.required]],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      puesto:['',[Validators.required]],
   })
  }

  ngOnInit(): void {
  }
  //metodos
      //metodos para tomar datos
      get Banner(){
        return this.form.get("banner");
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
      get Frase(){
        return this.form.get("frase");
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
