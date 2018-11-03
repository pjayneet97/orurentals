import { Injectable } from '@angular/core';
import { Rental } from '../models/rental.model'
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';
import {Enquiry} from '../models/enquiry.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  localities=["fatehpura","shobhagpura","malla talai"]
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  public rentalcollection:AngularFirestoreCollection
  public appliedrentalcollection:AngularFirestoreCollection
  public enquirycollection:AngularFirestoreCollection
  public properties:Rental[]=[]
  alert=true
  contactformalert=true
  constructor(public db: AngularFirestore,public storage :AngularFireStorage,private http: HttpClient) { 
    this.rentalcollection=this.db.collection('rental',ref=>ref.orderBy('date',"desc"))
    this.appliedrentalcollection=this.db.collection('appliedrental',ref=>ref.orderBy('date',"desc"))
    this.enquirycollection=this.db.collection('enquiry',ref=>ref.orderBy('date',"desc"))  
    /* this.getLocalities().subscribe(date=>this.localities=date) */
  }

  

  addRental(property:Rental){
    this.rentalcollection.add(property)

  }

  getRental(){
    return this.rentalcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
    
  }
  delRental(id:string,image:string){
    if(image=="/uploads/propertydefault.png"){
      
    }
    else{
      this.storage.ref(image).delete()
    }
    this.rentalcollection.doc(id).delete()
  }

  addEnquiry(enq:Enquiry){
    this.db.collection('enquiry').add(enq)
    this.http.get(this.url+enq.name+'&contact='+enq.contact+'&message='+enq.message+'&type=house'+'&owner='+enq.owner+'&ownercontact='+enq.ownercontact).subscribe();
  }
  getfilter(tmp:AngularFirestoreCollection){
    return tmp.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));

    
  }

  getEnquiries(){
    return this.enquirycollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  getRentalbyId(id:string){
    return this.db.collection('rental',ref=>ref.where('id','==',id)).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  addContact(contact:{date:any,name:string,contact:string,message:string}){
    this.db.collection('ContactForm').add(contact)
    this.http.get(this.url+contact.name+'&contact='+contact.contact+'&message='+contact.message).subscribe();
  }
  getContactsForms(){
    return this.db.collection('ContactForm',ref=>ref.orderBy('date',"desc")).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as {id?:string,date:any,name:string,contact:string,message:string};
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }
  delEnquiry(id:string){
    this.enquirycollection.doc(id).delete()
  }
  delContactEnquiry(id:string){
    this.db.collection('ContactForm').doc(id).delete()
  }

  addRentalrwndenq(property:Rental){
    this.db.collection('rendrentalenq').add(property)
    this.http.get(this.url+property.name+'&contact='+property.contact+'&type='+property.type+'&locality='+property.locality+'&rent='+property.rent+'&bhk='+property.bhk+'&for='+property.for).subscribe();
  }

  getRentalrwndenq(){
    return this.db.collection('rendrentalenq',ref=>ref.orderBy('date',"desc")).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
    
  }
  delRentalrwndenq(id:string){
    this.db.collection('rendrentalenq').doc(id).delete()
  }
  
  getLocalities(){
    return this.db.collection('localities').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as {id?:string,locality:string};
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  applyRental(property:Rental){
    this.db.collection('appliedrental').add(property)

  }

  getappliedRental(){
    return this.appliedrentalcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rental;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
    
  }
  delappliedRental(id:string){
    this.appliedrentalcollection.doc(id).delete()
  }
  
    
  }



