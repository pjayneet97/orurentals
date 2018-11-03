import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  demos:{name?:string,contact?:string,id?:string,date:Date}[]
  constructor(public tutorservice:TutorService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.tutorservice.getDemo().subscribe(data=>this.demos=data)

  }
  deldemo(id:string){
    this.tutorservice.delDemo(id);
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }


}
