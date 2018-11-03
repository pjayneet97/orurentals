import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {WorkerEnquiry} from '../models/worker.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  enquiryalert=true
  workerenquiry:WorkerEnquiry;
  workerenqcollection:AngularFirestoreCollection
  workercollection:AngularFirestoreCollection
  constructor(public db : AngularFirestore,private http: HttpClient) { 
    this.workerenqcollection=this.db.collection('workerenquiry',ref=>ref.orderBy('date',"desc"))
    this.workercollection=this.db.collection('workers',ref=>ref.orderBy('date',"desc"))
  }


  addEnquiry(enquiry:WorkerEnquiry){

    this.workerenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&type='+enquiry.type+'&area='+enquiry.area+'&reqtime='+enquiry.reqtime+'&reqdate='+enquiry.reqdate).subscribe();
  }

  addWorker(worker:WorkerEnquiry){
    this.workercollection.add(worker)
  }

  getEnquiry(){
    return this.workerenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as WorkerEnquiry;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  getWorkers(){
    return this.workercollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as  WorkerEnquiry;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }
  delEnq(id:string){
    this.workerenqcollection.doc(id).delete()
  }

  delWorker(id:string){
    this.workercollection.doc(id).delete()
  }


}


