import { Component, OnInit } from '@angular/core';
import {WeddingEnquiry} from '../../models/weddingenquiry.model';
import {WeddingService} from '../../services/wedding.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-eventenquiry',
  templateUrl: './eventenquiry.component.html',
  styleUrls: ['./eventenquiry.component.css']
})
export class EventenquiryComponent implements OnInit {

  enquiries:WeddingEnquiry[]=[]
  constructor(public weddingservice:WeddingService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.weddingservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.weddingservice.delEnq(id)
    this.modalService.dismissAll('deleted')
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
