import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.css']
})
export class LocalityComponent implements OnInit {
  locality
  localities
  constructor(public db:AngularFirestore, private modalService: NgbModal) { }

  ngOnInit() {
    this.getLocalities().subscribe(data=>this.localities=data)
  }

  getLocalities(){
    return this.db.collection('localities',ref=>ref.orderBy('locality')).snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as any;
        data.id=a.payload.doc.id;
        return data;
      });
    }));
  }

  addLocality(){
    this.db.collection('localities').add({locality:this.locality})
    this.locality=""
  }
  deleteLocality(id:string){
    this.db.collection('localities').doc(id).delete()
    this.modalService.dismissAll('deleted')
  }
  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

}
