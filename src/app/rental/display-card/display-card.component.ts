import { Component, OnInit, Input } from '@angular/core';
import {Rental} from '../../models/rental.model';
import {Enquiry} from '../../models/enquiry.model';
import {RentalService} from '../../services/rental.service'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  @Input() property : Rental={}
  sto
  enquiry : Enquiry={}
  modalstatus=true
  constructor(public rentalservice:RentalService,private storage:AngularFireStorage) { }

  ngOnInit() {
    this.sto=this.storage.ref(this.property.image).getDownloadURL()
    console.log(this.sto)
    console.log(this.property)
  }
  addEnquiry(){
    console.log(this.property)
    console.log(this.enquiry)
    let now = new Date();
    this.property.date=now
    this.property.status="null"
    console.log(this.enquiry.owner)
    this.rentalservice.addEnquiry(this.property)
    this.rentalservice.alert=false;
    setTimeout(()=>{ this.rentalservice.alert=true }, 4000)
    this.changemodalstatus()
  }

  changemodalstatus(){
    this.modalstatus=!this.modalstatus
    console.log(this.modalstatus)
  }

}
