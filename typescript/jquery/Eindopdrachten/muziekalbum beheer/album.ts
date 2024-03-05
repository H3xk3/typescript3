import { Track } from './track';

export interface Album {
    id: Symbol;
    name: string;
    artist: string;
    tracks: Track[];
}
