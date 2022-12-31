import { Component, OnInit } from '@angular/core';

//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

 //esto es para traer distintos datos
  miPortfolio:any
  
 
  constructor(private datos: DatosService) { }

  ngOnInit(): void {
     this.datos.getDatos().subscribe(data => {
      this.miPortfolio=data
    })
  }


}
