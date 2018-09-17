import { Component, Output, EventEmitter } from '@angular/core';
import { headerItem } from '../shared/header-item.enum';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'    
})

export class HeaderComponent{
    @Output() itemSelected = new EventEmitter<headerItem>();
    headerItem: typeof headerItem = headerItem;

    onItemSelected(item: headerItem){
        this.itemSelected.emit(item);
    }
}