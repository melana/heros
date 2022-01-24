import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(private http: HeroService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      nickname: ['', Validators.required],
      real_name: ['', Validators.required],
      origin_description: ['', Validators.required],
      superpowers: ['', Validators.required],
      catch_phrase: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.createForm()
  }

  get fcontrols(){
    return this.form.controls;
  }

  insertData(){
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    this.http.createHero(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message),
      {
        timeOut: 1000,
        progressBar: true
      })
      this.router.navigateByUrl('/')
    });

    console.log(this.form.value)
  
  }

}
