import { Component, OnInit } from '@angular/core';

// importamos las librerias del form reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-habilidades',
  templateUrl: './modal-edit-habilidades.component.html',
  styleUrls: ['./modal-edit-habilidades.component.css']
})
export class ModalEditHabilidadesComponent implements OnInit {
  form:FormGroup;
  categoria!: string;
  nombre!: string;
  porcentaje!: number;

  constructor(private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      categoria:['',[Validators.required]],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
  })
  }

  ngOnInit(): void {
  }
  //metodos
      //metodos para tomar datos
      get Categoria(){
        return this.form.get("categoria");
      }
      get Nombre(){
        return this.form.get("nombre");
      }
      get Porcentaje(){
        return this.form.get("porcentaje");
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
