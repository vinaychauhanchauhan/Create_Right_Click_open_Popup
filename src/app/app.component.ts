import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'Create_Right_Click_open_Popup';

  @ViewChild('contextMenu') contextMenu!: MatMenu;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  menuPosition = { x: '0px', y: '0px' };

  onRightClick(event: MouseEvent) {
  
    event.preventDefault();
    this.menuPosition.x = event.clientX + 'px';
    this.menuPosition.y = event.clientY + 'px';

   // this.trigger.menuData = { x: this.menuPosition.x, y: this.menuPosition.y };
    this.trigger.openMenu(); // Open the context menu
   // this.contextMenu.openMenu(); // Open the context menu
  }


  onAction(action: string) {
    console.log(`Selected: ${action}`);
    // Add action logic here
  }


}
