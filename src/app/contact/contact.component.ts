import { Component, OnInit } from '@angular/core';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  error:boolean=true
  name:string =""
  contact:string=""
  message:string=""
  constructor(public rentalservice:RentalService) { }

  ngOnInit() {
    this.error=true
  }
  submitContact(){
    if(this.name&&this.contact&&this.message){
      if(this.contact.length>=10){
        let now = new Date();
        this.rentalservice.addContact({date:now,name:this.name,contact:this.contact,message:this.message})
        this.name=""
        this.contact=""
        this.message=""
        this.rentalservice.contactformalert=false
        setTimeout(()=>{ this.rentalservice.contactformalert=true }, 4000)
      }
      else{
        this.error=false
        setTimeout(()=>{ this.error=true }, 4000)
      }
    }
    else{
      this.error=false
      setTimeout(()=>{ this.error=true }, 4000)
    }
    
  }

}
