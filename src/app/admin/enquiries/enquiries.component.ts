import { Component, OnInit } from '@angular/core';
import {Enquiry} from '../../models/enquiry.model';
import {RentalService} from '../../services/rental.service';
import { Rental } from '../../models/rental.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  enquiries:Enquiry[]=[]
  property:Rental
  constructor(public rentalservice:RentalService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.rentalservice.getEnquiries().subscribe(data=> this.enquiries=data)
  }
  deleteEnquiry(id:string){
    this.rentalservice.delEnquiry(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
