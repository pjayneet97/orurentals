import { Component, OnInit } from '@angular/core';
import {WorkerEnquiry} from '../../models/worker.model';
import {WorkerService} from '../../services/worker.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-workerenquiry',
  templateUrl: './workerenquiry.component.html',
  styleUrls: ['./workerenquiry.component.css']
})
export class WorkerenquiryComponent implements OnInit {
  enquiries:WorkerEnquiry[]=[]
  constructor(public workerservice:WorkerService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.workerservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.workerservice.delEnq(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
