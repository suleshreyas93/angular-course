import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy-component',
  templateUrl: './zippy-component.component.html',
  styleUrls: ['./zippy-component.component.css']
})
export class ZippyComponentComponent  {

  @Input('title')title: string
  isExpanded:boolean;

  toggle()
  {
    this.isExpanded = !this.isExpanded;
  }

}
