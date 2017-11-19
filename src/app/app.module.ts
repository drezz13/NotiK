import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


import { NotesServices } from './shared/services/notes.services';
import{ AuthGuard} from './shared/services/authGuard.service';
import { AuthService } from './shared/services/auth.service';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-Form/note-Form.component';
import {NoteListComponent} from './components/noteList/noteList.component';
import {NoteItemComponent} from './components/noteItem/noteItem.component';
import {ActionBarComponent} from './components/actionBar/actionBar.component';
import {SearchComponent} from './components/search/search.component';
import { LogInComponent } from './components/logIn/logIn.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';





export const firebaseConfig = {
  apiKey: "AIzaSyDMUjk7V-XyO8MvlRZbdQvD4Om4cwH_Tv4",
  authDomain: "notik-fire.firebaseapp.com",
  databaseURL: "https://notik-fire.firebaseio.com",
  projectId: "notik-fire",
  storageBucket: "",
  messagingSenderId: "615897669816"
}



@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteListComponent,
    NoteItemComponent,
    ActionBarComponent,
    SearchComponent,
    LogInComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LogInComponent
      },
      {
        path:'today',
        component:NoteListComponent,
        canActivate:[ AuthGuard]
        
      },
      {
        path:'search',
        component:SearchComponent,
        canActivate:[ AuthGuard]
      }
    ]),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
],
  entryComponents:[NoteFormComponent],
  providers: [NotesServices, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
