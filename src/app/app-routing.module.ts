import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { ArchiveNotesComponent } from './component/archive-notes/archive-notes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { TrashComponent } from './component/trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'notes', component: GetAllNotesComponent },
      { path: 'archive', component: ArchiveNotesComponent },
      { path: 'trash', component: TrashComponent },
    ], //add display
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
