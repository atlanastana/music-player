import {Injectable} from "@angular/core";
import {Music} from "../models/music.model";


@Injectable()
export class MusicService {

  Playlist: Array<Music> = [
    {
      id: 1,
      title: 'Музыка-1',
      link: '../assets/1.wav',
      artist: 'Исполнитель-1',
      duration: '6'
    }, {
      id: 2,
      title: 'Музыка-2',
      link: '../assets/2.wav',
      artist: 'Исполнитель-2',
      duration: '5'
    },
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
