import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Queue } from '../../models/queue.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.css'
})
export class QueueComponent {
  drinkQueue:Queue = {items:[]}


  constructor(private customerSvc:CustomerService){}

  async ngOnInit(){
    await this.customerSvc.getQueue();
    this.drinkQueue = this.customerSvc.currentQueue;
  }
}
