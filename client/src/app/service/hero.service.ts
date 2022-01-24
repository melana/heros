import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.apiUrl + '/heros');
  }

  createHero(data:any) {
    return this.http.post(environment.apiUrl + '/heros/add', data);
  }

  getHeroById(id:any){
    return this.http.get(environment.apiUrl  + '/heros/'+id);
  }

  updateHero(id:any, data:any){
    return this.http.put(environment.apiUrl + '/heros/edit/'+id, data);
  }

  deleteHero(id:any){
    return this.http.delete(environment.apiUrl  + '/heros/'+id);
  }
}
