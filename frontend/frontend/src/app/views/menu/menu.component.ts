import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  drinkMenu:Menu = {items:[]}
  constructor(private customerSvc:CustomerService){}
 
  async AddItem(name:string, price:number){
    await this.customerSvc.addDrink(name, price);
  }
  async ngOnInit(){
    await this.customerSvc.GetMenu();
    this.drinkMenu = this.customerSvc.drinkMenu;
  }
}
