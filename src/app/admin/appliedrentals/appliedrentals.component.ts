import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {RentalService} from '../../services/rental.service';
import { Rental } from '../../models/rental.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-appliedrentals',
  templateUrl: './appliedrentals.component.html',
  styleUrls: ['./appliedrentals.component.css']
})
export class AppliedrentalsComponent implements OnInit {
  i=0
  public properties:Rental[]=[]
  localities
  constructor(public db: AngularFirestore,public rentalservice:RentalService,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getProperties()  

  }

  getProperties(){
    this.rentalservice.getappliedRental().subscribe(data=>this.properties=data) 
    
  }
  delappliedProperty(id:string,image:string,locality:string){
    this.rentalservice.delappliedRental(id)
        this.modalService.dismissAll('deleted')
        
        
    
  }

  varifyProperty(prop:Rental){
    this.rentalservice.addRental(prop);
    this.rentalservice.delappliedRental(prop.id)
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
