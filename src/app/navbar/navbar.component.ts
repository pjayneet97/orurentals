import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental.model';
import {RentalService} from '../services/rental.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  percentage: Observable<number>;

  snapshot: Observable<any>;
  dangeralert=true
  successalert=true
  localities:any[]
  locstatus=0
  showRouter=true
  email:string=""
  word:string=""
  auth = true
  public property:Rental={}
  date:Date=new Date();
  selectedfiles:FileList
  file:File
  imgsrc:Observable<string>
  constructor(public db: AngularFirestore,public storage :AngularFireStorage,public rentalservice:RentalService) { 
    this.property.image="/uploads/propertydefault.png"
  }

  ngOnInit() {
    
  }

  choosefiles(event){
    this.selectedfiles=event.target.files;
    if(this.selectedfiles.item(0)){
      this.uploadpic()
 
    }
  }
  uploadpic(){
    let file=this.selectedfiles.item(0);
    let unique='/uploads/property'+Math.floor(Math.random()*100000)+this.date.getTime()+file.name
    const ref = this.storage.ref(unique);
    const uploadtask = this.storage.upload(unique,file);
    this.percentage =uploadtask.percentageChanges();
    this.snapshot   =uploadtask.snapshotChanges()
    uploadtask.snapshotChanges().pipe(
      finalize(() => {
        this.imgsrc = ref.getDownloadURL()         
        
      })
    )
    .subscribe();
    this.property.image=unique; 
  }
  applyProperty(){
    console.log(this.property)
    if(this.property.owner&&this.property.ownercontact&&this.property.locality&&this.property.rent){
      if(this.property.ownercontact.length>=10){

    let now = new Date();
    this.property.date=now
    this.rentalservice.applyRental(this.property)
    this.property={}
    this.property.image="/uploads/propertydefault.png"
    this.imgsrc=null
    this.successalert=false
    setTimeout(()=>{ this.successalert=true }, 4000)
      }
      else{
        this.dangeralert=false
        setTimeout(()=>{ this.dangeralert=true }, 4000)
      }
    }
    else{
      this.dangeralert=false
      setTimeout(()=>{ this.dangeralert=true }, 4000)
    }
  }



}
