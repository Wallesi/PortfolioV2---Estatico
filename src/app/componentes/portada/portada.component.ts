import { Component, OnInit , Input } from '@angular/core';
import { ComunicarService } from 'src/app/servicios/comunicar.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  
  public showPencilPortada!: boolean;
  miPortada:any;
  constructor(private datosPorfolio:PortfolioService, public comunicarComponentes:ComunicarService, private http:HttpClient) { }
  
  

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miPortada=data.portada;
    })
    
    console.log('Estamos parados en la portada',this.comunicarComponentes.mostrarLapiz);

    //Logica para mostrar lapiz
    if(this.comunicarComponentes.mostrarLapiz===true){
      this.showPencilPortada=true;
    }
  }
  

}
