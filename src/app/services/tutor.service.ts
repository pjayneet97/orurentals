import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { EnquiryHomeTutor } from '../models/EnquiryHomeTutor.model';
import { EnquirySchoolTutor } from '../models/EnquirySchoolTutor.model';
import { EnquiryCoachingTutor } from '../models/EnquiryCoachingTutor.model';
import { Tutor } from '../models/tutor.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TutorService {
  url='https://porwalroadways.000webhostapp.com/mail.php?name='
  hometutenqcollection:AngularFirestoreCollection
  schooltutenqcollection:AngularFirestoreCollection
  coachingtutenqcollection:AngularFirestoreCollection
  tutotcollection:AngularFirestoreCollection
  enquiryalert=true
  constructor(public db: AngularFirestore,private http: HttpClient) {
    this.hometutenqcollection=db.collection('hometutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.schooltutenqcollection=db.collection('schooltutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.coachingtutenqcollection=db.collection('coachingtutorenqiry',ref=>ref.orderBy('date',"desc"))
    this.tutotcollection=db.collection('tutors',ref=>ref.orderBy('date',"desc"))

  }
  addHomeTutorEnquiry(enquiry:EnquiryHomeTutor){

    this.hometutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&class='+enquiry.class+'&subjects='+enquiry.subjects).subscribe();
  }
  addSchoolTutorEnquiry(enquiry:EnquirySchoolTutor){
    this.schooltutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&schoolname='+enquiry.school+'&subjects='+enquiry.subjects).subscribe();
    
  }
  addCoachingTutorEnquiry(enquiry:EnquiryCoachingTutor){
    this.coachingtutenqcollection.add(enquiry)
    this.http.get(this.url+enquiry.name+'&contact='+enquiry.contact+'&area='+enquiry.locality+'&coachingname='+enquiry.institute+'&subjects='+enquiry.subjects).subscribe();
  }
  getHomeTutorEnquiries(){
    return this.hometutenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as EnquiryHomeTutor;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  getCoachingTutorEnquiries(){
    return this.coachingtutenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as EnquiryCoachingTutor;
        data.id=a.payload.doc.id;

        return data;
      });
    }));
  }

  getSchoolTutorEnquiries(){
    return this.schooltutenqcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as EnquirySchoolTutor;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  addTutor(tutor:Tutor){
    this.tutotcollection.add(tutor)
    this.http.get(this.url+tutor.name+'&contact='+tutor.contact+'&experience='+tutor.experience+'&preferance='+tutor.preferance+'&subjects='+tutor.subjects).subscribe();
  }

  getTutors(){
    return this.tutotcollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Tutor;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  addDemo(demo:{date?:Date,name?:string,contact?:string}){
    this.db.collection('demo').add(demo)
    this.http.get(this.url+demo.name+'&contact='+demo.contact+'&type=demo tutor').subscribe();
  }

  getDemo(){
    return this.db.collection('demo',ref=>ref.orderBy('date',"desc")).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as {name:string,contact:string,id:string,date:Date};
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  delHome(id:string){
    this.hometutenqcollection.doc(id).delete()
  }
  delCoaching(id:string){
    this.coachingtutenqcollection.doc(id).delete()
  }
  delSchool(id:string){
    this.schooltutenqcollection.doc(id).delete()
  }
  delTutor(id:string){
    this.tutotcollection.doc(id).delete()
  }
  delDemo(id:string){
    this.db.collection('demo').doc(id).delete()
  }
}
