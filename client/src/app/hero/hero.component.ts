import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heros: any;
  data: any;

  constructor(private http: HeroService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getHerosData();
  }

  getHerosData(){
    this.http.getData().subscribe(res => {
      this.heros = res;
    })
  }

  deleteData(id:any){
    this.http.deleteHero(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message),
      {
        timeOut: 1000,
        progressBar: true
      });
      this.getHerosData();
    });
  }

}
