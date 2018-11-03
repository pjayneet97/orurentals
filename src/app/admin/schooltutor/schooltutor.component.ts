import { Component, OnInit } from '@angular/core';
import { EnquirySchoolTutor } from '../../models/EnquirySchoolTutor.model';
import { TutorService } from '../../services/tutor.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-schooltutor',
  templateUrl: './schooltutor.component.html',
  styleUrls: ['./schooltutor.component.css']
})
export class SchooltutorComponent implements OnInit {
  enquiries:EnquirySchoolTutor[]
  constructor(public tutorservice:TutorService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.tutorservice.getSchoolTutorEnquiries().subscribe(data=>this.enquiries=data)
  }
  deleteEnquiry(id:string){
    this.tutorservice.delSchool(id)
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
