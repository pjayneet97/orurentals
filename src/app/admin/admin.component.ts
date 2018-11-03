import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental.model';
import {RentalService} from '../services/rental.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  localities:any[]
  locstatus=0
  showRouter=true
  email:string=""
  word:string=""
  auth = false
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
    this.property.image=unique;
    uploadtask.snapshotChanges().pipe(
      finalize(() => {
        this.imgsrc = ref.getDownloadURL()         
        
      })
    )
    .subscribe();   
  }
  addProperty(){
    this.getloc();    
    for(let locality of this.localities){
      if(locality.locality==this.property.locality){
        this.locstatus=1
       
      }
    }
    if(this.locstatus==0){
      this.db.collection('localities').add({locality:this.property.locality})
     
      

    }
   
      this.locstatus=0
  
   this.rentalservice.getLocalities().subscribe(data=>this.localities=data);

    let now = new Date();
    this.property.date=now
    this.rentalservice.addRental(this.property)
    this.property={}
    this.property.image="/uploads/propertydefault.png"
    this.imgsrc=null
  }
  onChange(){

    if(this.email=="admin@onrent4u.com"&&this.word=="open@onrent4u"){
      this.auth=true
    }
  }
  logout(){
    this.email=""
    this.word=""
    this.auth=false
  }

  getloc(){
    this.rentalservice.getLocalities().subscribe(data=>this.localities=data);
  }

}


