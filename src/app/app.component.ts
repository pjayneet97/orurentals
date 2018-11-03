import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadstatus
  ngOnInit(){
    this.loadstatus=true
    setTimeout(()=>{ this.loadstatus=false }, 1000)
  }

  func(){  
      /* console.log('need to remove element with class modal-backdrop') */
      if(document.querySelector('.modal-backdrop')){
        var modal=document.getElementById('navbar').parentElement.parentElement
        modal.classList.remove('modal-open')
        var backdrop=document.querySelector('.modal-backdrop')
        backdrop.remove()
      }  
  }
}
