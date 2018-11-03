import { Component, OnInit } from '@angular/core';
import {WorkerEnquiry} from '../../models/worker.model';
import {WorkerService} from '../../services/worker.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-ourworkers',
  templateUrl: './ourworkers.component.html',
  styleUrls: ['./ourworkers.component.css']
})
export class OurworkersComponent implements OnInit {
  enquiries:WorkerEnquiry[]=[]
  constructor(public workerservice:WorkerService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.workerservice.getWorkers().subscribe(data=>this.enquiries=data)
    
  }
  deleteWorker(id:string){
    this.workerservice.delWorker(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
