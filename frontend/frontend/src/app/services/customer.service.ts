import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { Menu } from '../models/menu.model';
import { Queue } from '../models/queue.model';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  drinkMenu:Menu = {
    items:[]
  }
  currentQueue:Queue = {
    items:[]
  }
  constructor(private httpClient:HttpClient) { }

  async addDrink(name:string, price:number){
    
    try{
      let result = await firstValueFrom(this.httpClient.post<Drink>('http://localhost:3000/add', {name:name, price:price}));
      return result;
    } catch(err){
      if(err instanceof HttpErrorResponse){
        console.log(`${err.status}`);
      }
      return firstValueFrom(of(null));
    }
  }

  async getQueue(){
    try{
      let result = await firstValueFrom(this.httpClient.get<Queue>('http://localhost:3000/Queue'));
      this.currentQueue = result;
    }catch(err){
      if(err instanceof HttpErrorResponse){
        console.log(`${err.status}`);
      }
    }
  }

  async GetMenu(){
    try{
      let response = await firstValueFrom(this.httpClient.get<Menu>('http://localhost:3000/Menu'));
      this.drinkMenu = response;
    } catch(err){
      if(err instanceof HttpErrorResponse){
        console.log(`${err.status} : ${err.message}`);
      }
    }
  }
}
