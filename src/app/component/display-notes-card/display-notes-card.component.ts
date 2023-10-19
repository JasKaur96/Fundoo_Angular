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

  // allNotes!: any;
  // constructor(private notesService: NotesService) {}

  ngOnInit() {
    // this.notesService.getAllNotes().subscribe((response: any) => {
    console.log('notes', this.notes);
    this.noteDetails.emit(this.notes);
    //   this.allNotes = response.data.data;
    // });
  }
}
