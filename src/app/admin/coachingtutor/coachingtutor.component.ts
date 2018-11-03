import { Component, OnInit } from '@angular/core';
import { EnquiryCoachingTutor } from '../../models/EnquiryCoachingTutor.model';
import { TutorService } from '../../services/tutor.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-coachingtutor',
  templateUrl: './coachingtutor.component.html',
  styleUrls: ['./coachingtutor.component.css']
})
export class CoachingtutorComponent implements OnInit {
  enquiries:EnquiryCoachingTutor[]=[]
  constructor(public tutorservice:TutorService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    
    this.tutorservice.getCoachingTutorEnquiries().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.tutorservice.delCoaching(id)
    this.modalService.dismissAll('any')
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
