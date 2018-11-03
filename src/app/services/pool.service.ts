import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {PoolEnquiry} from '../models/poolenquiry.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  enquiryalert=true
 poolenquiry:PoolEnquiry;
 poolenqcollection:AngularFirestoreCollection
  constructor(public db : AngularFirestore,private http: HttpClient) { 
    this.poolenqcollection=this.db.collection('poolenquiry',ref=>ref.orderBy('date',"desc"))
  }

  addEnquiry(enquiry:PoolEnquiry){

    this.poolenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&type='+enquiry.type+'&persons='+enquiry.persons+'&reqhours='+enquiry.hours+'&reqdate='+enquiry.reqdate).subscribe();
  }

  getEnquiry(){
    return this.poolenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as PoolEnquiry;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  delEnq(id:string){
    this.poolenqcollection.doc(id).delete()
  }

}
