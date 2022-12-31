import { Component, OnInit } from '@angular/core';

//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

   //esto es para traer distintos datos
   proyectoList:any

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyectoList=data.proyectos;
    })
  }

}
