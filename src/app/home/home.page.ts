import { Component, OnInit, inject } from '@angular/core';
import { AliipelisService } from '../servicio/aliipelis.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  aliipelisService=inject(AliipelisService)
  post:any;
  estreno:any;
  ngOnInit():void{
    this.aliipelisService.getMoviesNowPlaying().subscribe((data:any)=>{
      this.post=data.results;
      
    }
    );
    this.MoviesEstreno();
  }

  MoviesEstreno(){
    this.aliipelisService.getEstreno().subscribe({
      next:(data:any)=>{
        this.estreno = data.results;
        console.log(this.estreno);

      },
      error:(data:any)=>{

      }
    })
  }


}
