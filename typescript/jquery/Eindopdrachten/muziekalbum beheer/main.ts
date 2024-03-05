import { AlbumManager } from './albumManager';

// Importeer interfaces en klassen
import { Track } from './track';
import { Album } from './album';

// Voorbeeld tracks
const tracks: Track[] = [
    { id: Symbol(), name: 'Song A', length: '04:30' },
    { id: Symbol(), name: 'Song B', length: '03:45' },
    { id: Symbol(), name: 'Song C', length: '05:15' },
];

// Voorbeeld album
const album: Album = {
    id: Symbol(),
    name: 'My Album',
    artist: 'Artist Name',
    tracks: tracks,
};

// Maak een AlbumManager en voeg het album toe
const albumManager = new AlbumManager();
albumManager.addAlbum(album);

// Gebruik de generator functie om door de tracks van het album te bladeren en te loggen
const albumId = album.id;
const generator = albumManager.trackGenerator(albumId);
console.log('Tracks of Album:', album.name);
for (const track of generator) {
    console.log(track);
}
