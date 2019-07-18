import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {



  constructor(private namesService : NamesService) { }
  // test : string = 'test';
  // playerName : string = this.namesService.playerNameService;
  
  ngOnInit() {
  }

  // check() {
  //   alert(this.namesService.playerNameService);
  // }
  
  

    // rivalName : string = WelcomeComponent.rivalName;

}
