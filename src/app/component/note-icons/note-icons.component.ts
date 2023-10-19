import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ARCHIVE_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  DELETE_FOREVER_ICON,
  IMG_ICON,
  MORE_ICON,
  REMINDER_ICON,
  RESTORE_ICON,
  UNARCHIVE_ICON,
} from 'src/assets/svg-icons';
import { NotesService } from 'src/services/notes/notes.service';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss'],
})
export class NoteIconsComponent {
  @Input() noteDetails: any;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private noteService: NotesService
  ) {
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'collabrator-icon',
      sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'color-palatte-icon',
      sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'img-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'delete-forever-icon',
      sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'restore-icon',
      sanitizer.bypassSecurityTrustHtml(RESTORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'unarchive-icon',
      sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON)
    );
  }

  async handleIconsClick(operation: any) {
    console.log('noteDetails', this.noteDetails);
    if (operation == 'archive' || operation == 'unarchive') {
      this.noteService
        .archiveNote({
          noteIdList: [this.noteDetails?.id],
          isArchived: operation == 'archive' ? true : false,
        })
        .subscribe((response) => {
          console.log('response', response);
        });
    } else if (operation === 'trash' || operation === 'restore') {
      this.noteService.trashNote({
        noteIdList: [this.noteDetails?.id],
        isDeleted: operation === 'trash' ? true : false,
      });
    }
    // } else if (operation == 'delete') {
    //   const res = await this.noteService.deleteNote({
    //     noteIdList: [this.noteDetails?.id],
    //     isDeleted: false,
    //   });
    // } else {
    //   const res = await this.noteService.colorChange({
    //     noteIdList: [this.noteDetails?.id],
    //     color: operation,
    //   });
    // }

    // this.handleNotesOperations.emit({
    //   operation: operation,
    //   noteDetails: this.noteDetails,
    // });
  }
}
