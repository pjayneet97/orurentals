import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {WeddingEnquiry} from '../models/weddingenquiry.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
 weddingenquiry:WeddingEnquiry;
 weddingenqcollection:AngularFirestoreCollection
  constructor(public db : AngularFirestore,private http: HttpClient) { 
    this.weddingenqcollection=this.db.collection('weddingenquiry',ref=>ref.orderBy('date',"desc"))
  }

  addEnquiry(enquiry:WeddingEnquiry){

    this.weddingenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&type='+enquiry.type+'&description='+enquiry.services+'&reqdate='+enquiry.reqdate).subscribe();
  }

  getEnquiry(){
    return this.weddingenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as WeddingEnquiry;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  delEnq(id:string){
    this.weddingenqcollection.doc(id).delete()
  }

}


