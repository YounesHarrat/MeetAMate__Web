import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-infos-user',
  templateUrl: './top-infos-user.component.html',
  styleUrls: ['./top-infos-user.component.css']
})
export class TopInfosUserComponent implements OnInit {
  name = 'Angular 4';
  url = '';

onSelectFile(event:any) {
   if (event.target.files && event.target.files[0]) { 
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // convertis l'image en url

      reader.onload = (event) => { // appeler une fois que la convertion est OK
      if(reader.result != null)
        {
          this.url = reader.result.toString()
        }
       
      }
    }
  }

  // onSelectFile(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // convertis l'image en url

  //     reader.onload = (event) => { // appeler une fois que la convertion est OK
  //       if(reader.result != null)
  //       {
  //         this.url = reader.result.toString()
  //       }
       
  //     }
  //   }
  // }
  @Input() user: any;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
