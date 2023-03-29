import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ComunicarService } from 'src/app/servicios/comunicar.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  showPencilAbout!: boolean;
  miAboutUs:any;
  constructor(private datosPorfolio:PortfolioService, public comunicarComponentes:ComunicarService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      
      this.miAboutUs=data;
    })
    
    console.log('Estamos parados en la about us',this.comunicarComponentes.mostrarLapiz);

    if(this.comunicarComponentes.mostrarLapiz===true){
      this. showPencilAbout=true;
    }
  }
}
