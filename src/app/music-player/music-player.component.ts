import {Component} from '@angular/core';
import {MusicService} from "../store/music.service";

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})

export class MusicPlayerComponent {
  constructor(private musicService: MusicService) {
  }

  mssapDisplayTitle = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = true;
  mssapDisablePositionSlider = true;
  mssapDisplayRepeatControls = true;
  mssapDisplayVolumeControls = true;
  mssapDisplayVolumeSlider = false;

// Material Style Simple Audio Player
  mssapPlaylist: any[] = this.musicService.getList();

}
