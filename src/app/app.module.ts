import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ListComponent } from './list/list.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { ForumComponent } from './forum/forum.component';
import { ReversePipe } from './reverse.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AboutComponent,
    PlayerDetailComponent,
    AdminComponent,
    EditPlayerComponent,
    ForumComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
