import { Component, OnInit } from '@angular/core';
import {VehicleEnquiry} from '../../models/vehicleenquiry.model';
import {VehicleService} from '../../services/vehicle.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-vehicleenquiry',
  templateUrl: './vehicleenquiry.component.html',
  styleUrls: ['./vehicleenquiry.component.css']
})
export class VehicleenquiryComponent implements OnInit {

  enquiries:VehicleEnquiry[]=[]
  constructor(public vehicleservice:VehicleService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.vehicleservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.vehicleservice.delEnq(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
