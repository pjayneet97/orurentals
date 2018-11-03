import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import {VehicleEnquiry} from '../models/vehicleenquiry.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  vehicleenquiry:VehicleEnquiry;
  vehicleenqcollection:AngularFirestoreCollection
   constructor(public db : AngularFirestore,private http: HttpClient) { 
     this.vehicleenqcollection=this.db.collection('vehicleenquiry',ref=>ref.orderBy('date',"desc"))
   }
 
   addEnquiry(enquiry:VehicleEnquiry){

     this.vehicleenqcollection.add(enquiry)
     this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&type='+enquiry.type+'&reqhours='+enquiry.reqhours+'&reqdate='+enquiry.reqdate).subscribe();
   }
 
   getEnquiry(){
     return this.vehicleenqcollection.snapshotChanges().pipe(map(changes=>{
       return changes.map(a=>{
         const data = a.payload.doc.data() as VehicleEnquiry;
         data.id=a.payload.doc.id;
         return data;
       });
     }));
   }
 
   delEnq(id:string){
     this.vehicleenqcollection.doc(id).delete()
   }
 
}
