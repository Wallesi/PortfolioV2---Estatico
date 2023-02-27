import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
 
  miEducation:any;
  mostrarBoton=true;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      
      this.miEducation=data.educacion;

      if(this.miEducation=data.education.certificado===null){
        this.mostrarBoton=false;
        console.log("Entra aca");
      }
    })
    
  }
}
