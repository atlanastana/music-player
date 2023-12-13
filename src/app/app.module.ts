import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MusicPlayerComponent} from './music-player/music-player.component';
import {NgxAudioPlayerModule} from "ngx-audio-player";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MusicService} from "./store/music.service";
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [MusicService],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
