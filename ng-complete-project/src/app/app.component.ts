import { Component } from '@angular/core';
import { headerItem } from './shared/header-item.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedComponent: headerItem = headerItem.NONE;
  headerItem: typeof headerItem = headerItem;

  onItemSelected(item: headerItem){
    this.selectedComponent = item;
  }
}
