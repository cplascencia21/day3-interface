import { Component } from '@angular/core';

interface Person {
  firstName?: string;
  lastName?: string;
  sayHi(name): string;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
