import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() color: string = '';
  @Input() currentColor: string = 'black';
  @Output() colorChange = new EventEmitter<string>();

  isClicked: boolean = false;

  onButtonClick() {
    this.isClicked = !this.isClicked;
    this.colorChange.emit(this.isClicked ? this.color : 'black');
  }
}
