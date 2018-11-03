import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {ItEnquiry} from '../models/itenquiry.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  itenquiry:ItEnquiry;
 itenqcollection:AngularFirestoreCollection
  constructor(public db : AngularFirestore,private http: HttpClient) { 
    this.itenqcollection=this.db.collection('itenquiry',ref=>ref.orderBy('date',"desc"))
  }

  addEnquiry(enquiry:ItEnquiry){

    this.itenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&type='+enquiry.type+'&description='+enquiry.description).subscribe();
  }

  getEnquiry(){
    return this.itenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as ItEnquiry;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  delEnq(id:string){
    this.itenqcollection.doc(id).delete()
  }

}
