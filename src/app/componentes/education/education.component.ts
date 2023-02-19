import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ComunicarService } from 'src/app/servicios/comunicar.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  showPencilEducacion!: boolean;
  miEducation:any;
  constructor(private datosPorfolio:PortfolioService, public comunicarComponentes:ComunicarService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      
      this.miEducation=data.educacion;
    })
   
    console.log('Estamos parados en educacion',this.comunicarComponentes.mostrarLapiz);

    if(this.comunicarComponentes.mostrarLapiz===true){
      this.showPencilEducacion=true;
    }
  }
}
