import {Injectable} from "@angular/core";
import {Music} from "../models/music.model";
import {Subject} from "rxjs";


@Injectable()
export class MusicService {
  playList = new Subject<Array<Music>>();
  Playlist: Array<Music> = [
    {
      id: 3,
      title: 'Музыка-3',
      link: '../assets/3.mp3',
      artist: 'Исполнитель-3',
      duration: '8'
    }
  ]


  getList() {
    return this.Playlist.slice();
  }

}
