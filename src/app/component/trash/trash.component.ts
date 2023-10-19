import { Component } from '@angular/core';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
})
export class TrashComponent {
  trashedNotes!: any;
  constructor(private notesService: NotesService) {}

  ngOnInit() {
    console.log('archive');
    this.notesService.getTrashedNotes().subscribe((response: any) => {
      console.log('res', response.data.data);

      this.trashedNotes = response.data.data;
    });
    // this.receiveMessage();
  }
}
