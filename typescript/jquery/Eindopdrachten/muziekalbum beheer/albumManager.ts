import { Track } from './track';
import { Album } from './album';

export class AlbumManager {
    private albums: Album[] = [];

    addAlbum(album: Album): void {
        this.albums.push(album);
    }

    getAlbum(albumId: Symbol): Album | undefined {
        return this.albums.find(album => album.id === albumId);
    }

    *trackGenerator(albumId: Symbol): Generator<Track, void, unknown> {
        const album = this.getAlbum(albumId);
        if (!album) {
            throw new Error('Album not found');
        }
        for (let i = 0; i < album.tracks.length; i++) {
            yield album.tracks[i];
        }
    }
}
