import { Component, OnInit } from '@angular/core';
//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  //esto es para traer distintos datos
  experienciaList:any

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.experienciaList=data.experiencias;
    })
  }

}
