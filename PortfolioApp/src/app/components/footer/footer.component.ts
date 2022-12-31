import { Component, OnInit } from '@angular/core';

//aca importo el servicio
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  //esto es para traer distintos datos
  redesList:any

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.redesList=data;
    })

}
}
