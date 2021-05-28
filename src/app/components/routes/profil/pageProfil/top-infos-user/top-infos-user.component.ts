import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/shared/services/user/user.service';

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
     console.log(event)
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // convertis l'image en url

      reader.onload = (event) => { // appeler une fois que la convertion est OK
      if(reader.result != null)
        {
          this.url = reader.result.toString()
          this.userService.user.avatarIMG = this.url;
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

  constructor(public userService: UserService, public auth0: AuthService) { }

  ngOnInit(): void {
    console.log('TopInfoUser init', this.user);
    this.url = this.user.avatarIMG
  }

  setPseudo(): void {
    //set user pseudo by what's in input
    // @ts-ignore: Object is possibly 'null'
    let pseudoInput = document.getElementById("inputPseudo").value;
    this.userService.setPseudo(pseudoInput);
  }

  setAge(): void {
    // @ts-ignore
    const age = document.getElementById('age').value;
    console.log('setAge', age);

    this.userService.setAge(age);

  }

}
