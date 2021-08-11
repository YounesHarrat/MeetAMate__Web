import { Component, HostBinding, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  colors = ['red', 'blue', 'green'];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  @HostBinding("style.--background")
  setBackgroundColor(color: string) {
    console.log(color);
    console.log(this.sanitizer.bypassSecurityTrustStyle(`--background: ${color}`));
    return this.sanitizer.bypassSecurityTrustStyle(`--background: ${color}`);
  }

}
