import React from 'react';

const context = {

    songId: null,
    songUri: null,
    SongImg: null,
    albumImage: null,
    songArtist: null,
    progress: null,
    setSongArtist: (artist) => {},
    setSongImg: (img) => {},
    setSongId: (id) => {},
    setSongUri: (uri) => {},
    setAlbumImage: (albumImage) => {},
    setProgress: (progress) => {},
}

export const AppContext = React.createContext()