import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  abouts : AboutElement[]=[
    {
      name: "Ionic Framework",
      url : "https://ionicframework.com/",
      avatar : "../../assets/ionic.png"
    },
    {
      name: "Angular",
      url : "https://ionicframework.com/",
      avatar : "../../assets/angular.png"
    },
    {
      name: "TF Magenta/image",
      url : "https://www.npmjs.com/package/@magenta/image",
      avatar : "../../assets/magenta.png"
    } , {
      name :"angular-cli-ghpages",
      url : "https://github.com/angular-schule/angular-cli-ghpages",
      avatar : "../../assets/github.jpg"
    }
  ]
  constructor() {}

}

interface AboutElement {
  url : string;
  avatar : string;
  name : string;
}