import { Component, OnInit } from '@angular/core';
import {WorkerEnquiry} from '../models/worker.model';
import {WorkerService} from '../services/worker.service';
import {PoolEnquiry} from '../models/poolenquiry.model';
import {PoolService} from '../services/pool.service';
import {WeddingEnquiry} from '../models/weddingenquiry.model';
import {WeddingService} from '../services/wedding.service';
import {ItEnquiry} from '../models/itenquiry.model';
import {ItService} from '../services/it.service';
import {VehicleEnquiry} from '../models/vehicleenquiry.model';
import {VehicleService} from '../services/vehicle.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formerror=true
  enq:WorkerEnquiry={type:"SELECT TYPE"}
  enqpool:PoolEnquiry={type:"select type"}
  enqwedding:WeddingEnquiry={type:"select type"}
  enqit:ItEnquiry={type:"select type"}
  enqvehicle:VehicleEnquiry={type:"select type"}
  constructor(public workerservice:WorkerService,public poolservice:PoolService,public weddingservice:WeddingService,public itservice:ItService,public vehicleservice:VehicleService) { }

  ngOnInit() {
   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }
  addEnqWorker(){   
    if(this.enq.contact&&this.enq.name&&this.enq.area){
      if(this.enq.contact.length>=10){
        let now = new Date();
        this.enq.date=now
        this.workerservice.addEnquiry(this.enq)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enq={}
      }
      else{
        this.formerror=false
      }
    }
    else{
      this.formerror=false
    }
  }

  addWorker(){    
    let now = new Date();
    this.enq.date=now
    
    this.workerservice.addWorker(this.enq)
    this.workerservice.enquiryalert=false
    setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
    this.enq={}
  }

  func(str:string){

    this.enq.type=str
  }

  selectpool(str:string){
    this.enqpool.type=str
  }

  addEnqPool(){    

    if(this.enqpool.contact&&this.enqpool.name){
      if(this.enqpool.contact.length>=10){
        let now = new Date();
        this.enqpool.date=now
        this.poolservice.addEnquiry(this.enqpool)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enqpool={}
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }
  selectweddingservice(str:string){
    this.enqwedding.type=str
  }
  addEnqWedding(){    
    if(this.enqwedding.contact&&this.enqwedding.name){
      console.log("init")
      if(this.enqwedding.contact.length>=10){
        let now = new Date();
        this.enqwedding.date=now
        this.weddingservice.addEnquiry(this.enqwedding)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enqwedding={}
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

  selectitservice(str:string){
    this.enqit.type=str
  }

  addEnqIt(){    

    if(this.enqit.contact&&this.enqit.name){
      if(this.enqit.contact.length>=10){
        let now = new Date();
        this.enqit.date=now

        this.itservice.addEnquiry(this.enqit)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enqit={}
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }
  selectvehicle(str:string){
    this.enqvehicle.type=str
  }
  addEnqVehicle(){    

    if(this.enqvehicle.name&&this.enqvehicle.contact){
      if(this.enqvehicle.contact.length>=10){
        let now = new Date();
        this.enqvehicle.date=now
    
        this.vehicleservice.addEnquiry(this.enqvehicle)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enqvehicle={}
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

  addEnqPhotography(){    

    if(this.enqwedding.name&&this.enqwedding.contact){
      if(this.enqwedding.contact.length>=10){
        let now = new Date();
        this.enqwedding.date=now
        this.enqwedding.type="photography"    
        this.weddingservice.addEnquiry(this.enqwedding)
        this.workerservice.enquiryalert=false
        setTimeout(()=>{ this.workerservice.enquiryalert=true }, 4000)
        this.enqwedding={}
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

}
