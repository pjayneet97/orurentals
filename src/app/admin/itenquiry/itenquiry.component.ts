import { Component, OnInit } from '@angular/core';
import {ItEnquiry} from '../../models/itenquiry.model';
import {ItService} from '../../services/it.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-itenquiry',
  templateUrl: './itenquiry.component.html',
  styleUrls: ['./itenquiry.component.css']
})
export class ItenquiryComponent implements OnInit {
  enquiries:ItEnquiry[]=[]
  constructor(public itservice:ItService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.itservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.itservice.delEnq(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
