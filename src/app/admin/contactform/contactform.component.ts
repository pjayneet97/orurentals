import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  contacts:{id?:string,name?:string,contact?:string,message?:string}[]
  constructor(public rentalservice:RentalService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.rentalservice.getContactsForms().subscribe(data=>this.contacts=data)
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
