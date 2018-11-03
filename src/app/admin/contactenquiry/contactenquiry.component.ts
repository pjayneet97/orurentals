import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-contactenquiry',
  templateUrl: './contactenquiry.component.html',
  styleUrls: ['./contactenquiry.component.css']
})
export class ContactenquiryComponent implements OnInit {
  enquiries:any[]=[]
  constructor(public rentalservice:RentalService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
  
    this.rentalservice.getContactsForms().subscribe(data=>this.enquiries=data)

  }
  deleteEnquiry(id:string){
    this.rentalservice.delContactEnquiry(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
