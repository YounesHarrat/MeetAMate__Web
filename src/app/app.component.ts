import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'startingFront';


  ngOnInit(): void {
    const app = document;
    if (app.getElementById('backtotop') !== null ) {
      let el = app.getElementById('backtotop');
      // @ts-ignore: Object is possibly 'null'.
      el.onclick = function () {
        document.documentElement.scrollTop = 0;
      }
    }
  }

}


