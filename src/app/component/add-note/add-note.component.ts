import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  expand = false;
  title: string = '';
  description: string = '';

  constructor(private notesService: NotesService) {}
  handleExpand = () => {
    this.expand = !this.expand;
  };

  handleClose = () => {
    const noteObj = {
      title: this.title,
      description: this.description,
      color: '',
      isPined: false,
      isArchived: false,
      reminder: '',
    };
    this.expand = !this.expand;

    if (this.title && this.description) {
      const res = this.notesService
        .addnote(noteObj)
        .subscribe((response: any) => {
          console.log('response', response);
        });
    }
    // console.log('note', noteObj);
  };
}
