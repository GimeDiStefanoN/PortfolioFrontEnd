import { Component, OnInit } from '@angular/core';

//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    //esto es para traer distintos datos
    educacionList:any
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.educacionList=data.estudios;
    })
  }

}
