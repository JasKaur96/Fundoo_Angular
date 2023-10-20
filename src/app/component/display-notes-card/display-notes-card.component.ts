import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-display-notes-card',
  templateUrl: './display-notes-card.component.html',
  styleUrls: ['./display-notes-card.component.scss'],
})
export class NotesCardComponent {
  @Input() notes: any;
  @Output() noteDetails: EventEmitter<any> = new EventEmitter();
  @Output() receiveHandleIconsClick = new EventEmitter();

  ngOnInit() {
    this.noteDetails.emit(this.notes);
  }

  receiveHandleIcons(data: any) {
    console.log('receiveHandleIconsData', data);
    this.receiveHandleIconsClick.emit(data.noteDetails);
  }
  // receiveHandleIcons($event: any) {
  //   console.log('in displaynotes', this.notes, $event);
  //   this.noteDetails.emit($event.noteDetails);
  // }
}
