import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {RentalService} from '../../services/rental.service';
import { Rental } from '../../models/rental.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public properties:Rental[]=[]
  localities
  constructor(public db: AngularFirestore,public rentalservice:RentalService,config: NgbModalConfig, private modalService: NgbModal) { 
    
  }

  ngOnInit() {
    this.getProperties()
    

  }

  getProperties(){
    this.rentalservice.getRental().subscribe(data=>this.properties=data)
    
  }
  delProperty(id:string,image:string,locality:string){
    let locstatus=0
    let count=0
    this.rentalservice.delRental(id,image)
    for(let property of this.properties){
      if(property.locality==locality){
        count++
        
      }}
      if(count==1){
        this.rentalservice.getLocalities().subscribe(data=>this.localities=data)         
        for(let localit of this.localities){
          console.log(localit)
          if(locality==localit.locality){            
            this.db.collection('localities').doc(localit.id).delete()
          }
        }
      }
      this.modalService.dismissAll('deleted')
    
    
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
