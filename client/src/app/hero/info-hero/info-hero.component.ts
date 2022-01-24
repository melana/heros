import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/service/hero.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hero } from 'src/app/model/hero.model';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent implements OnInit {

  id:any;
  data:any
  hero = new Hero();

  constructor(private http: HeroService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: ActivatedRoute) { }

  form = new FormGroup({
    nickname: new FormControl(''),
    real_name: new FormControl(''),
    origin_description: new FormControl(''),
    superpowers: new FormControl(''),
    catch_phrase: new FormControl(''),

  })

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    this.getData();
  }

  getData(){
    this.http.getHeroById(this.id).subscribe( res => {
      this.data = res;
      this.hero = this.data;
      this.form = new FormGroup ({
        nickname: new FormControl(this.hero.nickname),
        real_name: new FormControl(this.hero.real_name),
        origin_description: new FormControl(this.hero.origin_description),
        superpowers: new FormControl(this.hero.superpowers),
        catch_phrase: new FormControl(this.hero.catch_phrase)
      })
    })
  }

  

}
