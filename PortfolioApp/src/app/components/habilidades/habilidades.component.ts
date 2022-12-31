import { Component, OnInit } from '@angular/core';

//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  //esto es para traer distintos datos
durasList:any;
blandasList:any;
idiomasList:any;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.durasList=data.habilidadesDuras;
      this.blandasList=data.habilidadesBlandas;
      this.idiomasList=data.idiomas;
    })
  }

}
