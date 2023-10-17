import { Component, Input } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-display-notes-card',
  templateUrl: './display-notes-card.component.html',
  styleUrls: ['./display-notes-card.component.scss'],
})
export class NotesCardComponent {
  @Input() notes: any;
  // allNotes!: any;
  // constructor(private notesService: NotesService) {}

  ngOnInit() {
    // this.notesService.getAllNotes().subscribe((response: any) => {
    console.log('notes', this.notes);
    //   this.allNotes = response.data.data;
    // });
  }
}
