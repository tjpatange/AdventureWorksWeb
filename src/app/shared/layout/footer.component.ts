import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html'
})
export default class FooterComponent {
  today: number = Date.now();
}
