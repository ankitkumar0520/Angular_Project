import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-new-component',
  imports: [FormsModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  title:string=""
  age:number=23
  sex:string="M"

  gender:string="M";

  constructor(){

  }
  showmsg(message:string){
    if(message!=null && message=='')
      {
        alert(message)
      }
      else{
        alert('blank')
      }
  }
}
