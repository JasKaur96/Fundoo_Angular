import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import {
  ARCHIVE_ICON,
  EDIT_ICON,
  LIST_VIEW_ICON,
  MENU_ICON,
  NOTE_ICON,
  OTHER_MENU_ICON,
  REFRESH_ICON,
  REMINDER_ICON,
  SEARCH_ICON,
  SETTING_ICON,
  TRASH_ICON,
} from 'src/assets/svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currState!: boolean;
  subscription!: Subscription;
  showFiller = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'menu-icon',
      sanitizer.bypassSecurityTrustHtml(MENU_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'search-icon',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'refresh-icon',
      sanitizer.bypassSecurityTrustHtml(REFRESH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'list-view-icon',
      sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'setting-icon',
      sanitizer.bypassSecurityTrustHtml(SETTING_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'other-menu-icon',
      sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'note-icon',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'edit-icon',
      sanitizer.bypassSecurityTrustHtml(EDIT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'trash-icon',
      sanitizer.bypassSecurityTrustHtml(TRASH_ICON)
    );
  }

  ngOnInit() {
    // this.subscription = this.data.currentSideNavbarState.subscribe(
    //   (state) => (this.currState = state)
    // );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  // toggleSideNavbar = () => {
  //   this.data.toggleSideNavbar(!this.currState);
  // };
}
