import { Component, OnInit } from '@angular/core';
import { EnquiryHomeTutor } from '../../models/EnquiryHomeTutor.model';
import { TutorService } from '../../services/tutor.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-hometutor',
  templateUrl: './hometutor.component.html',
  styleUrls: ['./hometutor.component.css']
})
export class HometutorComponent implements OnInit {
  enquiries:EnquiryHomeTutor[]
  constructor(public tutorservice:TutorService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.tutorservice.getHomeTutorEnquiries().subscribe(data=>this.enquiries=data)
  }
  deleteEnquiry(id:string){
    this.tutorservice.delHome(id)
    this.modalService.dismissAll('deleted')
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
